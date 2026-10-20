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

