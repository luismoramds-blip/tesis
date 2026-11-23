const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const Module = require('node:module');
const test = require('node:test');
const ts = require('typescript');

// Load the actual pure tracking logic without installing another test runner.
const filename = path.resolve(__dirname, '../lib/tracking.ts');
const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), {
 compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true },
}).outputText;
const loaded = new Module(filename, module);
loaded.filename = filename;
loaded.paths = Module._nodeModulePaths(path.dirname(filename));
loaded._compile(compiled, filename);
const { tasks, plan, statuses, priorities, effectiveTask, filteredTasks, snapshot, parseSnapshot } = loaded.exports;
const update = {status: 'en_curso', notes: 'Referencia a un archivo de trabajo.', dueDate: '2026-11-10', updatedAt: '2026-10-26T12:00:00.000Z'};

test('the audited plan has unique IDs and resolvable support and dependencies', () => {
 const ids = new Set(tasks.map(task => task.id));
 assert.equal(ids.size, tasks.length);
 for (const task of tasks) {
  assert.ok(Object.hasOwn(statuses, task.status));
  assert.ok(Object.hasOwn(priorities, task.priority));
  assert.ok(plan.areas.some(area => area.id === task.area));
  assert.ok(task.finding && task.nextAction && task.acceptance);
  for (const id of task.dependsOn) assert.ok(ids.has(id), id);
  for (const id of task.references) assert.ok(plan.references.some(ref => ref.id === id), id);
  for (const file of task.files) assert.ok(fs.existsSync(path.resolve(__dirname, '..', file)), file);
 }
});

test('export/import preserves notes, personal target dates and overridden status', () => {
 const updates = {'FOR-01': update};
 assert.deepEqual(parseSnapshot(JSON.stringify(snapshot(updates))), updates);
 assert.equal(effectiveTask(tasks.find(task => task.id === 'FOR-01'), updates).status, 'en_curso');
 assert.equal(effectiveTask(tasks.find(task => task.id === 'DAT-01'), updates).status, 'hecha');
});

test('filters use edited statuses and accent-insensitive search across notes and references', () => {
 const filters = { search: '', area: '', status: 'en_curso', priority: '' };
 const updates = {'FOR-01': update};
 assert.ok(filteredTasks(updates, filters).some(task => task.id === 'FOR-01'));
 assert.ok(filteredTasks({}, {...filters, status: '', search: 'financiacion'}).some(task => task.id === 'EVI-05'));
 assert.ok(filteredTasks(updates, {...filters, search: 'archivo de trabajo'}).some(task => task.id === 'FOR-01'));
 assert.ok(filteredTasks({}, {...filters, status: '', search: 'AP-3', area: 'arquitectura'}).every(task => task.area === 'arquitectura'));
 assert.deepEqual(filteredTasks({}, {...filters, search: 'tarea-inexistente-xyz'}), []);
});

test('a new completion needs an evidence note; existing documented work remains valid', () => {
 assert.throws(() => parseSnapshot(JSON.stringify(snapshot({'FOR-01': {...update, status:'hecha', notes:' '}}))), /evidencia/);
 const complete = {'FOR-01': {...update, status:'hecha', notes:'Pregunta revisada y acta de revisión en archivo X.'}};
 assert.deepEqual(parseSnapshot(JSON.stringify(snapshot(complete))), complete);
 assert.doesNotThrow(() => parseSnapshot(JSON.stringify(snapshot({'DAT-01': {...update, status:'hecha', notes:''}}))));
});

test('imports reject invalid and incompatible snapshots without modifying plan data', () => {
 const before = JSON.stringify(plan);
 const rejects = [
  '{', 'null', '[]',
  JSON.stringify({...snapshot({}), planVersion:'otra-version'}),
  JSON.stringify({...snapshot({}), updates:[]}),
  JSON.stringify(snapshot({'NO-EXISTE':update})),
  JSON.stringify(snapshot({'FOR-01':{...update, status:'__proto__'}})),
  JSON.stringify(snapshot({'FOR-01':{...update, notes:42}})),
  JSON.stringify(snapshot({'FOR-01':{...update, notes:'x'.repeat(5001)}})),
  JSON.stringify(snapshot({'FOR-01':{...update, dueDate:'2026-02-30'}})),
  JSON.stringify(snapshot({'FOR-01':{...update, updatedAt:'fecha-invalida'}})),
 ];
 for (const text of rejects) assert.throws(() => parseSnapshot(text));
 assert.equal(JSON.stringify(plan), before);
 assert.deepEqual(parseSnapshot(JSON.stringify(snapshot({}))), {});
});

test('the page renders every baseline task, resource and accessible form on the server', () => {
 const originalTs = require.extensions['.ts'];
 const originalTsx = require.extensions['.tsx'];
 const loader = (entry, file) => {
  const output = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
   compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX, esModuleInterop: true },
  }).outputText;
  entry._compile(output, file);
 };
 require.extensions['.ts'] = loader;
 require.extensions['.tsx'] = loader;
 try {
  const {renderToStaticMarkup} = require('react-dom/server');
  const Page = require('../app/pendientes/page.tsx').default;
  const markup = renderToStaticMarkup(Page());
  for (const task of tasks) {
   assert.ok(markup.includes(`id="tarea-${task.id}"`), task.id);
   assert.ok(markup.includes(`id="notes-${task.id}"`), task.id);
   assert.ok(markup.includes(`id="due-${task.id}"`), task.id);
  }
  for (const resource of plan.resources) assert.ok(markup.includes(resource.url));
  assert.match(markup, /<a(?=[^>]*href="\/pendientes")(?=[^>]*aria-current="page")[^>]*>Pendientes<\/a>/);
  assert.ok(markup.includes('No se comparten con el tutor'));
  assert.ok(markup.includes('37 de 37 tareas visibles'));
 } finally {
  if (originalTs) require.extensions['.ts'] = originalTs; else delete require.extensions['.ts'];
  if (originalTsx) require.extensions['.tsx'] = originalTsx; else delete require.extensions['.tsx'];
 }
});
