'use client';

import { useEffect, useRef, useState, type MouseEvent } from 'react';
import {
  effectiveTask, filteredTasks, parseSnapshot, plan, priorities, snapshot,
  statuses, storageKey, tasks, type TaskStatus, type TaskUpdate, type Updates,
} from '../lib/tracking';

const emptyFilters = { search: '', area: '', status: '', priority: '' };
function download(name: string, contents: string, type: string) {
  const url = URL.createObjectURL(new Blob([contents], { type }));
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default function TaskTracker() {
  const [updates, setUpdates] = useState<Updates>({});
  const [ready, setReady] = useState(false);
  const [filters, setFilters] = useState(emptyFilters);
  const [notice, setNotice] = useState('');
  const [saveState, setSaveState] = useState('');
  const [pendingImport, setPendingImport] = useState<Updates | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const importInput = useRef<HTMLInputElement>(null);

  function goToTask(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    setFilters(emptyFilters);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const target = document.getElementById(`tarea-${id}`);
      target?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      target?.focus({ preventScroll: true });
      history.replaceState(null, '', `#tarea-${id}`);
    }));
  }

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        setUpdates(parseSnapshot(saved));
        setSaveState('Seguimiento local recuperado.');
      }
    } catch {
      setNotice('No se pudo recuperar el seguimiento guardado. Se muestra el plan base; el respaldo existente no se ha sobrescrito.');
    }
    setReady(true);
  }, []);

  function persist(next: Updates) {
    setUpdates(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(snapshot(next)));
      setSaveState('Cambios guardados en este navegador.');
    } catch {
      setSaveState('No se pudo guardar en el navegador. Exporta el JSON antes de salir para conservar tus cambios.');
    }
  }

  function update(id: string, patch: Partial<TaskUpdate>) {
    const task = tasks.find(item => item.id === id)!;
    const next = { ...effectiveTask(task, updates), ...patch, updatedAt: new Date().toISOString() };
    if (next.status === 'hecha' && task.status !== 'hecha' && !next.notes.trim()) {
      setNotice(`Antes de cerrar ${id}, escribe en las notas qué entregaste y dónde está la evidencia.`);
      const details = document.getElementById(`detail-${id}`) as HTMLDetailsElement | null;
      if (details) details.open = true;
      document.getElementById(`notes-${id}`)?.focus();
      return;
    }
    setNotice('');
    persist({ ...updates, [id]: next });
  }

  async function importFile(file?: File) {
    if (!file) return;
    try {
      if (file.size > 500_000) throw new Error('El archivo supera el tamaño admitido para un respaldo de seguimiento (500 KB).');
      setPendingImport(parseSnapshot(await file.text()));
      setConfirmReset(false);
      setNotice('Respaldo validado. Confirma si quieres reemplazar el seguimiento local; el plan base no cambia.');
    } catch (error) {
      setPendingImport(null);
      setNotice(error instanceof Error ? error.message : 'No se pudo leer el archivo.');
    } finally {
      if (importInput.current) importInput.current.value = '';
    }
  }

  const visible = filteredTasks(updates, filters);
  const counts = Object.fromEntries(Object.keys(statuses).map(status => [status, tasks.filter(task => effectiveTask(task, updates).status === status).length]));
  const changed = Object.keys(updates).length;
  const nextTasks = plan.nextTaskIds.map(id => tasks.find(task => task.id === id)!).filter(task => effectiveTask(task, updates).status !== 'hecha');
  const sourceLabel = (id: string) => plan.references.find(reference => reference.id === id)?.label ?? id;

  return <div className="tracking-root">
    <section id="balance" className="wrap tracking-balance" aria-labelledby="balance-title">
      <div className="tracking-section-heading"><div><div className="eyebrow">01 / BALANCE</div><h2 id="balance-title">Qué tenemos y qué falta.</h2></div><p>Estos conteos describen tareas de distinto tamaño. No representan un porcentaje de tesis terminada ni una aprobación académica.</p></div>
      <div className="tracking-stats" aria-label="Estado de las tareas del plan">
        {(Object.entries(statuses) as [TaskStatus, string][]).map(([key, label]) => <div key={key} className={`tracking-stat stat-${key}`}><strong>{counts[key]}</strong><span>{label}</span></div>)}
      </div>
      <div className="tracking-findings">{plan.findings.map(finding => <article key={finding.title}><h3>{finding.title}</h3><p>{finding.detail}</p></article>)}</div>
    </section>

    <section id="siguiente" className="tracking-next-section" aria-labelledby="next-title"><div className="wrap">
      <div className="tracking-section-heading"><div><div className="eyebrow">02 / POR DÓNDE SEGUIR</div><h2 id="next-title">Primero, cerrar el enfoque.</h2></div><p>Avanza con las decisiones que orientan todo lo demás. La investigación documental puede continuar en paralelo.</p></div>
      <ol className="tracking-next">{nextTasks.map((task, index) => <li key={task.id}><span aria-hidden="true">0{index + 1}</span><div><small>{task.id}</small><h3>{task.title}</h3><p>{task.nextAction}</p><a href={`#tarea-${task.id}`} onClick={event => goToTask(event, task.id)}>Ver tarea y criterio de cierre →</a></div></li>)}</ol>
      {!nextTasks.length && <p>Las tres acciones iniciales figuran como hechas en tu seguimiento. Revisa sus evidencias y continúa con el método, los escenarios y el diagnóstico.</p>}
    </div></section>

    <section id="tareas" className="section wrap" aria-labelledby="tasks-title">
      <div className="tracking-section-heading"><div><div className="eyebrow">03 / PLAN DE TRABAJO</div><h2 id="tasks-title">Una tarea, un resultado verificable.</h2></div><p>{tasks.length} tareas con prioridad, soporte y criterio de cierre. Los estados iniciales proceden de la revisión del {plan.reviewedAtLabel}.</p></div>

      <div className="tracking-storage">
        <h3>Tu seguimiento personal</h3><p>Estados, notas y fechas se guardan en este navegador. No se comparten con el tutor ni se sincronizan con GitHub, Vercel u otros dispositivos. Exporta el JSON como respaldo; el plan base sigue en el repositorio.</p>
        <div className="tracking-actions">
          <button type="button" disabled={!ready} onClick={() => download('seguimiento-tesis.json', JSON.stringify(snapshot(updates), null, 2) + '\n', 'application/json')}>Exportar seguimiento JSON ↓</button>
          <button type="button" disabled={!ready} onClick={() => importInput.current?.click()}>Importar respaldo</button>
          <button type="button" disabled={!ready} onClick={() => download(`plan-base-${plan.version}.json`, JSON.stringify(plan, null, 2) + '\n', 'application/json')}>Descargar plan base ↓</button>
          <button type="button" className="tracking-quiet" disabled={!ready || !changed} onClick={() => { setConfirmReset(true); setPendingImport(null); }}>Restablecer seguimiento</button>
        </div>
        <input type="file" accept=".json,application/json" ref={importInput} hidden onChange={event => void importFile(event.target.files?.[0])} aria-label="Seleccionar respaldo JSON" />
        <p className="tracking-save" role="status">{ready ? saveState || 'Plan base cargado. Todavía no hay cambios personales.' : 'Preparando el seguimiento local…'}</p>
        {notice && <p className="tracking-notice" role="alert">{notice}</p>}
        {pendingImport !== null && <div className="tracking-confirm" role="group" aria-label="Confirmar importación"><p>El respaldo contiene {Object.keys(pendingImport).length} tareas con cambios. Reemplazará tus estados, notas y fechas locales. Exporta primero si necesitas conservarlos.</p><div className="tracking-actions"><button type="button" onClick={() => { persist(pendingImport); setPendingImport(null); setNotice('Seguimiento importado.'); }}>Reemplazar con el respaldo</button><button type="button" onClick={() => { setPendingImport(null); setNotice('Importación cancelada.'); }}>Cancelar</button></div></div>}
        {confirmReset && <div className="tracking-confirm" role="group" aria-label="Confirmar restablecimiento"><p>Se eliminarán tus cambios de este seguimiento y volverás a los estados iniciales. Puedes exportarlos antes.</p><div className="tracking-actions"><button type="button" onClick={() => { persist({}); setConfirmReset(false); setNotice('Seguimiento restablecido al plan base.'); }}>Restablecer al plan base</button><button type="button" onClick={() => setConfirmReset(false)}>Conservar mis cambios</button></div></div>}
      </div>

      <form className="tracking-filters" onSubmit={event => event.preventDefault()} aria-label="Filtrar tareas">
        <label className="tracking-search">Buscar tarea<input type="search" value={filters.search} onChange={event => setFilters({ ...filters, search: event.target.value })} placeholder="Ej.: tutor, integridad, D04, AP-3…" /></label>
        <label>Área<select value={filters.area} onChange={event => setFilters({ ...filters, area: event.target.value })}><option value="">Todas las áreas</option>{plan.areas.map(area => <option key={area.id} value={area.id}>{area.label}</option>)}</select></label>
        <label>Estado<select value={filters.status} onChange={event => setFilters({ ...filters, status: event.target.value })}><option value="">Todos los estados</option>{Object.entries(statuses).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
        <label>Prioridad<select value={filters.priority} onChange={event => setFilters({ ...filters, priority: event.target.value })}><option value="">Todas</option>{Object.entries(priorities).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label>
      </form>
      <div className="tracking-results"><p role="status">{visible.length} de {tasks.length} tareas visibles</p><button type="button" onClick={() => setFilters(emptyFilters)}>Limpiar filtros</button></div>
      <div className="tracking-task-list">
        {visible.map(task => {
          const current = effectiveTask(task, updates);
          const area = plan.areas.find(item => item.id === task.area)!;
          return <article id={`tarea-${task.id}`} key={task.id} tabIndex={-1} className={`tracking-task task-${current.status}`}>
            <div className="tracking-task-top"><span className="tracking-task-id">{task.id} · {area.label}</span><span className={`tracking-priority priority-${task.priority}`}>Prioridad {priorities[task.priority].toLocaleLowerCase('es')}</span></div>
            <div className="tracking-task-heading"><h3>{task.title}</h3><label>Estado de {task.id}<select value={current.status} disabled={!ready} onChange={event => update(task.id, { status: event.target.value as TaskStatus })}>{Object.entries(statuses).map(([key, label]) => <option key={key} value={key}>{label}</option>)}</select></label></div>
            <p className="tracking-finding">{task.finding}</p>
            <div className="tracking-task-action"><strong>Siguiente acción</strong><p>{task.nextAction}</p></div>
            <details id={`detail-${task.id}`} className="tracking-task-details"><summary>Criterio de cierre, soporte y notas</summary>
              <div className="tracking-acceptance"><h4>Se cierra cuando</h4><p>{task.acceptance}</p></div>
              {task.dependsOn.length > 0 && <div className="tracking-dependencies"><h4>Se relaciona con</h4><div>{task.dependsOn.map(id => <a key={id} href={`#tarea-${id}`} onClick={event => goToTask(event, id)}>{id} · {statuses[effectiveTask(tasks.find(item => item.id === id)!, updates).status]}</a>)}</div><p>Son relaciones de planificación; cambiar un estado no verifica por sí solo el trabajo previo.</p></div>}
              <div className="tracking-support"><h4>Origen y soporte</h4><ul>{task.references.map(id => <li key={id}><a href={`#fuente-${id}`}>{sourceLabel(id)}</a></li>)}</ul>{task.files.length > 0 && <p>Archivos del repositorio: {task.files.map(file => <code key={file}>{file}</code>)}</p>}</div>
              <div className="tracking-task-edit"><label htmlFor={`notes-${task.id}`}>Notas y evidencia de cierre<textarea id={`notes-${task.id}`} rows={3} maxLength={5000} disabled={!ready} value={current.notes} placeholder="Resultado, enlace o archivo de evidencia y decisión del tutor, si aplica." onChange={event => update(task.id, { notes: event.target.value })} /></label><label htmlFor={`due-${task.id}`}>Fecha objetivo personal<input id={`due-${task.id}`} type="date" min="2000-01-01" max="2100-12-31" disabled={!ready} value={current.dueDate} onChange={event => update(task.id, { dueDate: event.target.value })} /><small>Opcional. No es una fecha oficial de la universidad.</small></label></div>
              {current.updatedAt && <p className="tracking-updated">Última edición personal: <time dateTime={current.updatedAt}>{new Date(current.updatedAt).toLocaleString('es-CO')}</time></p>}
              {current.status !== task.status && <p className="tracking-updated">Estado al revisar el plan: {statuses[task.status]}. El cambio actual pertenece a tu seguimiento personal.</p>}
            </details>
          </article>;
        })}
        {!visible.length && <div className="tracking-empty"><h3>No hay tareas con estos filtros.</h3><p>Prueba otro término o limpia los filtros para volver al plan completo.</p><button type="button" onClick={() => setFilters(emptyFilters)}>Mostrar todas las tareas</button></div>}
      </div>
    </section>

    <section id="tutor" className="tracking-tutor-section"><div className="wrap"><div className="tracking-section-heading"><div><div className="eyebrow">04 / PARA REVISAR CON EL TUTOR</div><h2>Decisiones que orientan el proyecto.</h2></div><p>Lleva una propuesta y evidencia para cada decisión. Las recomendaciones del profesor no sustituyen el aval del tutor ni la formalización del programa.</p></div><div className="tracking-decisions">{plan.decisions.map(decision => <article key={decision.title}><h3>{decision.title}</h3><p>{decision.detail}</p></article>)}</div></div></section>

    <section id="soporte" className="section wrap tracking-source-section"><div className="tracking-section-heading"><div><div className="eyebrow">05 / TRAZABILIDAD</div><h2>Base de esta revisión.</h2></div><p>Se revisaron los dos documentos de comentarios del profesor César Augusto Vega Fernández del 19 de octubre y los archivos actuales del proyecto. No se realizó una nueva consulta de los portales ni del despliegue.</p></div>
      <div className="tracking-downloads"><h3>Documentos de trabajo</h3><p>Copias de lectura de los archivos del proyecto. Sus estados y límites forman parte de cada documento.</p><ul>{plan.resources.map(resource => <li key={resource.id}><a href={resource.url} download>{resource.label} ↓</a></li>)}</ul></div>
      <details className="tracking-source-details"><summary>Ver correspondencia con los comentarios y la información universitaria</summary><p>AP identifica puntos del documento sobre el anteproyecto; TG, puntos del documento sobre la página de trabajo de grado. Son orientaciones del profesor, no requisitos adicionales de la universidad. UNI corresponde al texto informativo compartido por el autor; las condiciones operativas se deben reconfirmar con el programa.</p><dl>{plan.references.map(reference => <div id={`fuente-${reference.id}`} key={reference.id}><dt>{reference.id} · {reference.label}</dt><dd>{reference.detail}</dd></div>)}</dl></details>
    </section>
  </div>;
}
