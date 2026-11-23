import roadmap from '../content/roadmap.json';

export const statuses = {
  pendiente: 'Pendiente',
  en_curso: 'En curso',
  por_revisar: 'Por revisar',
  hecha: 'Hecha',
} as const;
export type TaskStatus = keyof typeof statuses;
export const priorities = { critica: 'Crítica', alta: 'Alta', normal: 'Normal' } as const;
export type TaskPriority = keyof typeof priorities;
export type Task = Omit<(typeof roadmap.tasks)[number], 'status' | 'priority'> & {
  status: TaskStatus;
  priority: TaskPriority;
};
export const plan = roadmap;
export const tasks = roadmap.tasks as Task[];
export type TaskUpdate = { status: TaskStatus; notes: string; dueDate: string; updatedAt: string };
export type Updates = Record<string, TaskUpdate>;
export const storageKey = 'cesar.tesis.seguimiento.v1';

export function effectiveTask(task: Task, updates: Updates): TaskUpdate {
  return updates[task.id] ?? { status: task.status, notes: '', dueDate: '', updatedAt: '' };
}

export function snapshot(updates: Updates) {
  return { schemaVersion: 1, planVersion: plan.version, exportedAt: new Date().toISOString(), updates };
}

export function parseSnapshot(text: string): Updates {
  const value: unknown = JSON.parse(text);
  if (!value || typeof value !== 'object' || Array.isArray(value)) throw new Error('El archivo no contiene un seguimiento válido.');
  const data = value as Record<string, unknown>;
  if (data.schemaVersion !== 1 || data.planVersion !== plan.version) {
    throw new Error('El respaldo corresponde a otra versión del plan. Conserva el archivo y revisa sus cambios antes de incorporarlo.');
  }
  if (!data.updates || typeof data.updates !== 'object' || Array.isArray(data.updates)) throw new Error('Faltan las tareas del seguimiento.');
  const result: Updates = {};
  for (const [id, raw] of Object.entries(data.updates)) {
    const task = tasks.find(item => item.id === id);
    if (!task || !raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error(`Tarea desconocida o inválida: ${id}.`);
    const row = raw as Record<string, unknown>;
    if (typeof row.status !== 'string' || !Object.hasOwn(statuses, row.status) ||
        typeof row.notes !== 'string' || row.notes.length > 5000 ||
        typeof row.dueDate !== 'string' || typeof row.updatedAt !== 'string' ||
        (row.updatedAt !== '' && (!Number.isFinite(Date.parse(row.updatedAt)) || row.updatedAt.length > 40))) {
      throw new Error(`Los datos de ${id} no tienen el formato esperado.`);
    }
    if (row.dueDate !== '') {
      const date = new Date(`${row.dueDate}T00:00:00Z`);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(row.dueDate) || !Number.isFinite(date.getTime()) || date.toISOString().slice(0, 10) !== row.dueDate) {
        throw new Error(`La fecha de ${id} no es válida.`);
      }
    }
    if (row.status === 'hecha' && task.status !== 'hecha' && !row.notes.trim()) {
      throw new Error(`Para cerrar ${id}, añade una nota con el resultado y la evidencia.`);
    }
    result[id] = { status: row.status as TaskStatus, notes: row.notes, dueDate: row.dueDate, updatedAt: row.updatedAt };
  }
  return result;
}

export function filteredTasks(updates: Updates, filters: { search: string; area: string; status: string; priority: string }) {
  const normalize = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('es');
  const query = normalize(filters.search.trim());
  return tasks.filter(task => {
    const current = effectiveTask(task, updates);
    return (!filters.area || task.area === filters.area) &&
      (!filters.status || current.status === filters.status) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!query || normalize([task.id, task.title, task.finding, task.nextAction, task.acceptance, current.notes, ...task.references].join(' ')).includes(query));
  });
}
