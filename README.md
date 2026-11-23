# Anteproyecto Cesar
Web personal para presentar ante-proyecto de la tesis de grado.

## Desarrollo
Requiere Node.js 20.9 o superior.

```sh
npm ci
npm run dev
```
Abrir http://localhost:3000.


## Páginas
- /: anteproyecto para revisión y formalización.
- /tesis: capítulos pendientes y seguimiento del desarrollo.
- content/thesis.ts: estructura y actividades de cada capítulo; actualizar con evidencia real y revisión del tutor.
- components/SiteHeader.tsx: encabezado y navegación compartidos.


## Evidencias D01 y D02
Los originales están en evidencias/D01 y evidencias/D02. El comando npm run sync:evidence copia solo los archivos revisados a public/evidencias y genera content/preservation.json con huellas. Se ejecuta automáticamente antes de dev y build. Mantener los originales en Git para que Vercel pueda generarlos. La página /tesis enlaza los documentos y capturas; no se ha publicado ni subido el cambio automáticamente.


## Lectura de registros
/tesis/evidencias/D01 y /tesis/evidencias/D02 muestran el Markdown original con índice, tablas, tareas y capturas. Se generan estáticamente desde evidencias/{id}/registro.md. El archivo .md sigue disponible en public/evidencias tras ejecutar sync:evidence. Para incorporar nuevas evidencias, actualizar la lista explícita de scripts/sync-evidence.cjs.

## Pendientes y seguimiento

- `/pendientes`: balance revisado el 26 de octubre de 2026 y tablero de tareas con filtros por área, estado y prioridad, búsqueda, notas y fechas objetivo personales.
- `content/roadmap.json`: plan base versionado; cada tarea indica observación, siguiente acción, criterio de cierre y referencias a los comentarios del profesor.
- `investigacion/seguimiento/revision_2026-10-26.md`: diagnóstico del avance y lista de tareas.
- Los cambios del tablero se guardan en `localStorage` de ese navegador, no en GitHub ni entre dispositivos. Exportar/importar JSON para respaldarlos. El importador exige la misma versión del plan y pide confirmar antes de reemplazar los cambios locales.
- Los conteos representan tareas, no porcentaje de tesis realizada ni aprobación académica. Una nueva tarea marcada como hecha exige una nota con su resultado y evidencia.
- `sync:evidence` también prepara cinco documentos de lectura en `public/seguimiento`, carpeta generada e ignorada por Git. Los comentarios privados del profesor no se copian al sitio.
- Verificación del seguimiento: `node scripts/test-tracking.cjs` comprueba integridad del plan, filtros, exportación/importación, rechazo de respaldos inválidos y renderizado inicial.

