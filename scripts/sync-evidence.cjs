// Publish only explicitly reviewed evidence files; originals stay in evidencias/.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const root = path.resolve(__dirname, '..');
const definitions = [
  { id: 'D01', files: [ ['plegable_cesar_2018.pdf','Mapa turístico · PDF de una página'], ['registro.md','Registro de preservación D01'], ['fuentes/procedencia_windows_zone_identifier.txt','Procedencia del PDF registrada por Windows'], ['capturas/D01_01_pagina_gobernacion.png','Página institucional y mapa'], ['capturas/D01_02_guia_flipsnack_y_mapa.png','Guía Flipsnack y mapa en la misma página'], ['capturas/D01_03_visor_flipsnack_descarga_reportada.png','Visor y botón de descarga'], ['capturas/D01_04_error_descarga_nxdomain.png','Error de descarga en el navegador'], ['capturas/D01_05_consultas_dns_local_cloudflare.png','Consultas DNS con dos resolutores'], ['capturas/D01_06_consultas_dns_tipo_A.png','Consultas DNS explícitas de tipo A'], ['capturas/D01_07_wayback_pagina_20261020.png','Reproducción de la página en Wayback'] ] },
  { id: 'D02', files: [ ['plan_sectorial_turistico.pdf','Plan de Desarrollo Turístico · PDF'], ['registro.md','Registro de preservación D02'], ['capturas/D02_00_pagina_completa_pdf182_p175.png','Reproducción completa de la ficha S.02 · PDF 182 / impresa 175'], ['capturas/D02_05_portada_pdf001.png','Reproducción de la portada · PDF 1'], ['capturas/D02_01_objetivo_cronograma.png','Ficha S.02 · objetivo y cronograma'], ['capturas/D02_02_justificacion_descripcion_p175.png','Justificación y descripción · página impresa 175'], ['capturas/D02_03_gobernanza_financiacion.png','Gobernanza e inversión propuesta'], ['capturas/D02_04_wayback_reproduccion_20260209.png','Reproducción histórica en Wayback · febrero de 2026'] ] },
  { id: 'D03', files: [["registro.md", "Registro de preservación D03"], ["capturas/D03_01_publicacion_institucional.png", "Publicación institucional actual"], ["capturas/D03_02_destino_informe_sin_descarga_visible.png", "Destino actual sin descarga visible"], ["capturas/D03_03_codigo_sin_coincidencias_pdf.png", "Búsqueda .pdf sin coincidencias"], ["capturas/D03_04_codigo_sin_coincidencias_download_url.png", "Búsqueda download_url sin coincidencias"], ["capturas/D03_05_wayback_sin_resultados_prefijo.png", "Wayback sin resultados para el prefijo consultado"], ["capturas/D03_06_wayback_calendario_publicacion.png", "Calendario histórico de la publicación"], ["capturas/D03_07_wayback_publicacion_20180827.png", "Publicación archivada · agosto de 2018"], ["capturas/D03_08_wayback_ficha_descarga_20190723.png", "Ficha histórica · julio de 2019"], ["capturas/D03_09_wayback_descarga_parametro_no_archivada.png", "Descarga HTTPS no archivada según Wayback"], ["capturas/D03_10_wayback_descarga_http_vista_blanca.png", "Variante HTTP con vista en blanco"]] },
  { id: 'D05', files: [['informe_de_gestion_vigencia_2018.pdf','Informe de Gestión 2018 · PDF de 232 páginas'], ['registro.md','Registro de preservación D05'], ['capturas/informe_de_gestion_cesar_2018.png','Apartado 2.1.5 · implementación y recursos reportados']] },
];
const manifest = definitions.map(({id,files}) => ({id,files:files.map(([name,label]) => {
 const source = path.join(root,'evidencias',id,name);
 const destination = path.join(root,'public','evidencias',id,name);
 const bytes = fs.readFileSync(source);
 fs.mkdirSync(path.dirname(destination),{recursive:true});
 fs.copyFileSync(source,destination);
 return {label,name,url:'/evidencias/'+id+'/'+name,size:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex').toUpperCase(),kind:path.extname(name).slice(1)};
})}));
fs.writeFileSync(path.join(root,'content','preservation.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('Evidencias sincronizadas: '+manifest.reduce((count,item)=>count+item.files.length,0)+' archivos.');

// Explicit working documents used by the tracking page; never copy private feedback.
const trackingFiles = [
 ['investigacion/seguimiento/revision_2026-10-26.md', 'revision_2026-10-26.md'],
 ['evidencias/inventario.md', 'inventario.md'],
 ['evidencias/D01/extraccion/muestra_cinco_registros.md', 'muestra_cinco_registros.md'],
 ['evidencias/D01/extraccion/muestra_cinco_registros.json', 'muestra_cinco_registros.json'],
 ['investigacion/escenarios/INT-01_integridad.md', 'INT-01_integridad.md'],
];
for (const [source, name] of trackingFiles) {
 const destination = path.join(root, 'public', 'seguimiento', name);
 fs.mkdirSync(path.dirname(destination), {recursive:true});
 fs.copyFileSync(path.join(root, source), destination);
}
console.log('Documentos de seguimiento sincronizados: '+trackingFiles.length+'.');

