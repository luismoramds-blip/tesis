# D01 — Publicación documental de información turística del Cesar

## Fuente y archivos preservados

- Entidad identificada: Gobernación del Cesar.
- Página institucional visible en la captura: https://cesar.gov.co/d/es/nosotros/el-departamento/perfil-economico/45-institucional/747-artmendeptur-2
- Fecha de revisión de los archivos locales: 20 de octubre de 2026.
- Descarga del mapa: 20 de octubre de 2026, 10:20 a. m. (America/Bogota), declarada por Luis Felipe Mora Lobo. Esta hora no procede de metadatos.
- Procedimiento de descarga confirmado por el autor: pulsó el mapa en la página institucional y después el botón de descarga del visor. Las horas individuales de las capturas no se han precisado.
- URL directa del mapa PDF: https://cesar.gov.co/d/filesmain/ofiturismo/plegable_cesar_2018.pdf
- Procedencia de la URL: campos HostUrl y ReferrerUrl del flujo Zone.Identifier asociado a la copia local. No constituye una nueva verificación de disponibilidad del servidor.
- URL archivada de la página: https://web.archive.org/web/20261020154628/https://cesar.gov.co/d/es/nosotros/el-departamento/perfil-economico/45-institucional/747-artmendeptur-2
- Archivo local: [plegable_cesar_2018.pdf](plegable_cesar_2018.pdf).
- Tamaño del PDF: 23.396.403 bytes.
- Páginas: 1.
- Nombre visible en el visor y título de metadatos: PlegableCaraCesar.
- Título visible en el documento: Mapa Turístico del Cesar.
- Captura: [D01_01_pagina_gobernacion.png](capturas/D01_01_pagina_gobernacion.png).

## Integridad

| Archivo relativo a D01 | Algoritmo | Huella |
| --- | --- | --- |
| plegable_cesar_2018.pdf | SHA-256 | 97F2E604B58359AD40D52AE33C7FB5B3B3ED8E7979F5D69343ED81EDCBC40190 |
| capturas/D01_01_pagina_gobernacion.png | SHA-256 | 0495C57B74298A5B8FA38FC9FE1C0B9E1AB08835E278C80258409112808BDBB8 |

Procedimiento: cálculo con Get-FileHash sobre los archivos locales. Las huellas permiten detectar modificaciones posteriores; no acreditan por sí solas la autenticidad ni la fecha original de publicación.

## Procedimiento de revisión

Inspección visual de la captura aportada por el autor, extracción de texto y metadatos de la copia local del PDF y cálculo de sus huellas. Esta revisión no incluye una nueva consulta directa a la página institucional ni una inspección del código de su visor.

## Observaciones

1. La captura muestra la dirección de la página institucional y un visor PDF con el nombre PlegableCaraCesar, indicador 1/1, controles de zoom, descarga e impresión.
2. El documento visible es un mapa o plegable turístico con contenido sobre municipios y atractivos. Coincide temáticamente con el texto extraído del PDF preservado.
3. Existe una copia local del PDF de una página. El enlace se recuperó del flujo Zone.Identifier de Windows; falta confirmar el procedimiento exacto usado por el autor para obtenerla.
4. El PDF contiene texto extraíble. Por tanto, no corresponde describirlo como un documento totalmente no procesable. La extracción requiere tratamiento para convertir su contenido editorial y cartográfico en registros estructurados.
5. Los metadatos CreationDate y ModDate indican 14 de febrero de 2018, 14:28:39, UTC-05:00. Son datos internos del archivo, no una fecha de publicación institucional comprobada; el nombre local con 2018 tampoco constituye prueba independiente.
6. La captura no muestra controles ni marca de Flipsnack. Esto no prueba que el servicio haya sido retirado de toda la página: la observación se limita a la vista capturada.

## Interpretación

La evidencia preservada documenta una vía de publicación turística mediante PDF y disponibilidad de una copia local. Para reutilizar su contenido en un sistema de información se requiere identificar entidades, atributos, procedencia y reglas de transformación.

La captura permite observar una opción de descarga, pero no caracteriza por completo los servicios de consulta o formatos alternativos que puedan existir en otras partes del sitio.

## Corrección respecto del registro preliminar

La consulta inicial del 9 de octubre identificó una referencia a Flipsnack en el contenido HTML recuperado. Los archivos aportados y revisados el 20 de octubre muestran una vista de un PDF con descarga. Deben conservarse ambas observaciones con sus fechas y métodos, sin afirmar un cambio del sitio ni una dependencia exclusiva del visor externo hasta investigar cómo se accede a cada presentación.

No se sostiene con esta captura la afirmación de ausencia de PDF o de imposibilidad de descarga.

## Relación con la investigación

- Capítulo: Diagnóstico y fuentes.
- Aporte: caracterizar los formatos de publicación y el esfuerzo de transformación hacia datos estructurados.
- Criterios relacionados: capacidad de actualización, reutilización y preservación de datos.
- Dependencia de proveedor: hipótesis pendiente de caracterización; esta evidencia por sí sola no demuestra dependencia exclusiva de Flipsnack.

## Límites

La captura muestra solo una vista parcial del documento y no acredita acceso a otros contenidos de la página. La URL directa del mapa se identificó en sus metadatos de procedencia de Windows. Su disponibilidad actual, licencia de reutilización y fecha de publicación siguen sin verificarse. No permite concluir que no existan conjuntos de datos, API, descargas u otras vías de acceso. Tampoco demuestra causas de discontinuidad de SITUR.

## Estado consolidado de tareas

Esta lista resume el estado actual. Las secciones posteriores conservan la secuencia de observaciones y no deben interpretarse como nuevas tareas duplicadas.

- [x] Conservar el PDF del mapa y las capturas con contexto de la página, guía, fallo de descarga y consultas DNS.
- [x] Calcular las huellas SHA-256 y comprobar que el PDF no ha cambiado.
- [x] Verificar una página y texto extraíble en el mapa.
- [x] Distinguir la guía de Flipsnack del mapa PDF y documentar sus vías de acceso diferentes.
- [x] Registrar la fecha y hora de descarga precisadas por Luis Felipe Mora Lobo: 20 de octubre de 2026, 10:20 a. m., hora de Colombia.
- [x] Confirmar el procedimiento original de descarga del mapa: pulsar el mapa institucional y utilizar el botón de descarga del visor.
- [ ] Precisar las fechas y horas individuales de las capturas si se requiere reconstruir su secuencia; no se les asigna automáticamente la hora de descarga del PDF.
- [x] Identificar la URL del PDF del mapa mediante HostUrl y ReferrerUrl en Zone.Identifier.
- [x] Identificar la URL del iframe Flipsnack referenciada en la consulta web y el destino de su botón de descarga.
- [x] Documentar el resultado del intento de descarga y su contraste DNS desde el mismo equipo.
- [ ] Comprobar una descarga independiente o una copia alternativa de la guía completa.
- [x] Preservar la página institucional en Wayback y registrar la reproducción parcial aportada por el autor.
- [ ] Archivar por separado la URL directa del mapa y comprobar qué contenido de la guía conserva el archivo web.
- [ ] Verificar las condiciones específicas de reutilización de mapa y guía; no se ha identificado una licencia abierta aplicable.
- [x] Actualizar D01 en la web y mantener el Markdown como fuente de la página de lectura.
- [x] Comprobar el estado de Git: los archivos de evidencias todavía no están bajo seguimiento.
- [ ] Incorporar las evidencias a un commit después de revisar su inclusión y condiciones de publicación. No se ha hecho commit ni push en esta revisión.
## Ampliación de la observación — guía y mapa en la misma página

- Fecha de revisión: 20 de octubre de 2026.
- Captura aportada por el autor: [D01_02_guia_flipsnack_y_mapa.png](capturas/D01_02_guia_flipsnack_y_mapa.png).
- SHA-256: ADF9DBB49A5754CC40EAA4C02F25CB37CB0E018AF28B07B1E4922AC680697D7B.
- Observación: bajo el título «Guía Turística del Departamento del Cesar» aparece un visor con marca Flipsnack. Debajo se muestra el «Mapa Turístico del Cesar», reconocible en el PDF local preservado.
- La captura aporta contexto de ambos recursos en una misma vista. No incluye la barra de dirección; su asociación con la página institucional se basa en lo informado por el autor y se complementa con la captura anterior que sí muestra su URL.
- Interpretación: la publicación observada reúne al menos dos recursos documentales. El PDF del mapa no puede considerarse una copia ni un respaldo de la guía de Flipsnack sin verificar que sus contenidos sean equivalentes.
- Dependencia de proveedor: se observa el uso de Flipsnack para presentar la guía. La disponibilidad del mapa descargado no demuestra independencia de proveedor para la guía.
- Estado posterior: las URL del mapa y del iframe se identificaron; el fallo del botón de descarga y la reproducción parcial archivada se documentaron. Las copias alternativas de la guía siguen pendientes.

Esta ampliación permite resolver parte de la ambigüedad del registro inicial: ambas presentaciones coexisten en la captura. No hay evidencia suficiente para afirmar que una sustituyó a la otra ni para concluir que la guía carece de descarga alternativa.
## Intento de descarga de la guía en Flipsnack

- Fecha de registro del reporte: 20 de octubre de 2026.
- Fuente del resultado: el autor informa que el visor no le permite descargar la guía.
- Captura: [D01_03_visor_flipsnack_descarga_reportada.png](capturas/D01_03_visor_flipsnack_descarga_reportada.png).
- SHA-256 de la captura: 999CDB82F46D070487861E0C42452D9F4C22A793136BBAE9EB95720A30218184.
- Observación visual: la guía es visible en pantalla completa; la notificación del navegador identifica cdn.flipsnack.com. En la barra superior aparece un icono con flecha de descarga.
- Resultado reportado: no se obtuvo una descarga de la guía durante el intento del autor.
- Límite: la captura no muestra el resultado de pulsar el icono ni un mensaje de error, restricción o autenticación. No demuestra que la descarga esté deshabilitada por el editor ni que sea imposible por otras vías.
- Interpretación provisional: la guía es consultable mediante el visor externo, pero su obtención como archivo independiente no se ha logrado en el intento reportado. Debe distinguirse del mapa PDF ya preservado.
- Verificación posterior completada: la captura D01_04 muestra DNS_PROBE_FINISHED_NXDOMAIN tras pulsar el icono. Las URL del destino de descarga y del iframe quedan documentadas en este registro.
## Resultado documentado del botón de descarga

- Fecha de incorporación de la evidencia: 20 de octubre de 2026.
- Procedimiento informado por el autor: pulsar el botón de descarga de la guía en el visor Flipsnack.
- URL completa de destino: https://pdf-generator.flipsnack.com/index.php?ch=ftcm635po
- Confirmación de la URL: dirección completa compartida por el autor el 20 de octubre de 2026; utiliza HTTPS. Esta confirmación no constituye una nueva prueba de acceso.
- Host de destino visible: pdf-generator.flipsnack.com.
- Mensaje visible en Chrome: «No se puede acceder a este sitio web».
- Código mostrado: DNS_PROBE_FINISHED_NXDOMAIN.
- Captura: [D01_04_error_descarga_nxdomain.png](capturas/D01_04_error_descarga_nxdomain.png).
- SHA-256: 5D6A5D1101704F82F11A6E6299CA773FD7A99493CED5C6E3B6D69CB1A9AA46B9.

### Observación

El intento de descarga conduce a una página de error del navegador que indica un fallo de resolución del nombre del servidor de generación de PDF. La guía había sido visible en el visor externo, pero no se obtuvo el archivo mediante el botón en el intento reportado.

### Interpretación para la investigación

La consulta visual y la descarga siguen rutas de servicio distintas. El funcionamiento del visor no asegura que la generación o entrega del PDF siga disponible. Este caso aporta un fallo concreto observado en una dependencia externa de la vía de descarga.

### Límites

La captura no demuestra que el editor haya deshabilitado la descarga, que el host esté ausente de forma permanente o global, ni que el documento original se haya perdido. No permite descartar causas locales o transitorias de DNS. Tampoco establece que no existan copias alternativas. Deben mantenerse separadas esta guía y el PDF del mapa ya preservado.

### Estado de comprobación

- [x] Identificar la respuesta al pulsar el botón y conservar una captura del error.
- [x] Registrar el host y el código de error visibles.
- [x] Confirmar la URL completa, incluido su esquema: HTTPS, compartida por el autor.
- [x] Contrastar la resolución DNS con la configuración del equipo y con 1.1.1.1, incluidas consultas explícitas de tipo A; conservar las capturas.
- [ ] Repetir el acceso en otro momento o conexión si se requiere caracterizar la persistencia del fallo.
- [ ] Identificar otras vías públicas para obtener una copia de la guía.

Redacción propuesta del hallazgo: «En el intento documentado por el autor, la guía turística fue consultable mediante Flipsnack, pero el botón de descarga dirigió al host pdf-generator.flipsnack.com y el navegador mostró DNS_PROBE_FINISHED_NXDOMAIN. No se obtuvo una copia de la guía por esa vía».

Esta evidencia complementa el reporte anterior: ya se conoce el mensaje mostrado tras pulsar el icono; la causa definitiva y el alcance del fallo siguen pendientes de contraste.
## Contraste mediante consultas DNS en PowerShell

- Fecha de incorporación del reporte: 20 de octubre de 2026. La hora de ejecución no es visible en la captura.
- Ejecución: realizada por el autor; revisión de la captura aportada.
- Captura: [D01_05_consultas_dns_local_cloudflare.png](capturas/D01_05_consultas_dns_local_cloudflare.png).
- SHA-256: C164E40409E2D8111E4C503187EAB67CD9C52EA504730C89EAFBC0FAF87CD7BC.

```powershell
Resolve-DnsName pdf-generator.flipsnack.com -DnsOnly
Resolve-DnsName pdf-generator.flipsnack.com -Server 1.1.1.1 -DnsOnly
```

### Resultado visible

Ambas consultas muestran una entrada SOA para la zona flipsnack.com en la sección Authority, con PrimaryServer ns-1616.awsdns-10.co.uk. La primera muestra TTL 799 y la segunda TTL 900. No se ve una dirección IP ni registros A o AAAA del host solicitado en estas salidas.

### Interpretación y límites

El resultado aporta un contraste fuera del navegador: en la consulta con la configuración DNS del equipo y en la dirigida a 1.1.1.1 no se muestra una dirección IP del host de descarga. Es consistente con la dificultad de acceso documentada, pero la captura no presenta el código de respuesta DNS completo ni permite distinguir por sí sola todas las causas de una respuesta sin dirección.

No se concluye que todo Flipsnack esté caído, que el host haya desaparecido definitivamente, que la causa sea contractual o presupuestal, ni que la guía se haya perdido. La consulta dirigida a otro servidor se realizó desde el mismo equipo y red; no equivale a una comprobación desde otra conexión independiente.

### Siguiente comprobación

La comprobación explícita de tipo A se completó y quedó preservada en D01_06. Repetir en otro momento o conexión solo si se necesita caracterizar la persistencia del fallo.
## Comprobación explícita de tipo A

- Fecha de incorporación de la evidencia: 20 de octubre de 2026; la captura no muestra la hora de ejecución.
- Captura: [D01_06_consultas_dns_tipo_A.png](capturas/D01_06_consultas_dns_tipo_A.png).
- SHA-256: EB1392E922569B935CF5C041A1E65ACA0EA5D49BCD723873890E260FE0A45DC1.
- Ejecución: realizada por el autor, según la captura compartida.

```powershell
Resolve-DnsName pdf-generator.flipsnack.com -Type A -Server 1.1.1.1 -DnsOnly
Resolve-DnsName pdf-generator.flipsnack.com -Type A -DnsOnly
```

### Resultado

Las salidas muestran registros SOA de flipsnack.com en la sección Authority, con TTL 900 y 595 respectivamente, sin registro A ni dirección IPv4 visibles para pdf-generator.flipsnack.com.

### Síntesis del hallazgo D01

En la revisión documentada, la guía turística se visualiza mediante Flipsnack. Al intentar descargarla, el navegador abre el servicio pdf-generator.flipsnack.com y muestra DNS_PROBE_FINISHED_NXDOMAIN. Las consultas DNS realizadas desde el mismo equipo, tanto con su configuración habitual como dirigidas a 1.1.1.1, no muestran una dirección IPv4 del host de descarga, incluso al solicitar explícitamente el tipo A. No se obtuvo la guía por esa vía.

El mapa turístico es un recurso distinto y sí cuenta con un PDF local preservado. No se considera un respaldo equivalente de la guía sin comparar sus contenidos.

### Alcance de la conclusión

Se documenta un fallo de la vía de descarga que utiliza un servicio externo, distinto del servicio de visualización. No se demuestra indisponibilidad permanente o global, pérdida definitiva del documento ni causa contractual, presupuestal o institucional. La captura DNS no incluye el código completo de respuesta del protocolo ni consultas de tipo AAAA; las pruebas provienen del mismo equipo y red.

### Estado y continuación

- [x] Comprobar explícitamente el tipo A mediante dos configuraciones de resolución y conservar la evidencia visual.
- [x] Relacionar el resultado con el error del navegador, conservando sus límites.
- [x] Preservar la página institucional en Wayback y registrar la URL obtenida; reproducción parcial observada en la captura del autor.
- [x] Actualizar D01 en la web de tesis con la distinción entre guía, mapa y fallo de descarga: 20 de octubre de 2026.

Las comprobaciones actuales bastan para registrar el hallazgo preliminar acotado. No se requieren más consultas DNS idénticas; nuevas pruebas tendrán sentido para estudiar su persistencia o contrastarlo desde otra red.
## Archivo web de la página institucional

- Servicio: Internet Archive — Wayback Machine / Save Page Now.
- URL archivada: https://web.archive.org/web/20261020154628/https://cesar.gov.co/d/es/nosotros/el-departamento/perfil-economico/45-institucional/747-artmendeptur-2
- Identificador de captura: 20261020154628.
- Fecha indicada: 20 de octubre de 2026, 15:46:28 UTC (10:46:28 a. m., America/Bogota).
- Resultado reportado por Save Page Now, compartido por el autor: captura exitosa.
- Evidencia de reproducción aportada por el autor: [D01_07_wayback_pagina_20261020.png](capturas/D01_07_wayback_pagina_20261020.png).
- SHA-256 de la captura: 1E427B992CDB82B15BA4203E80D41C4EA6C200F04BD38FC59E8DB346A096FBFA.

### Observación

La barra de direcciones y la interfaz de Wayback identifican la captura del 20 de octubre de 2026. Se reproduce parte de la página institucional, incluido el título «Guía Turística del Departamento del Cesar» y el mapa turístico. En esta imagen no se visualiza el contenido del visor Flipsnack bajo el título.

### Alcance de la preservación

La evidencia acredita visualmente la reproducción parcial de la página contenedora en la captura indicada. No demuestra que el archivo web haya preservado la guía completa, su funcionalidad, todas las dependencias externas o el PDF descargable. La ausencia del visor en esta imagen tampoco demuestra su ausencia definitiva en el archivo: puede requerir carga adicional o responder a limitaciones de reproducción.

El PDF local del mapa sigue siendo un recurso independiente de la guía. No debe marcarse la guía como preservada íntegramente solo porque la página contenedora está archivada.

### Estado

- [x] Registrar URL y fecha de archivo de la página institucional.
- [x] Conservar una captura de su reproducción con la fecha de Wayback visible.
- [ ] Comprobar si el visor de la guía puede reproducirse dentro del archivo web y qué recursos conserva.
- [x] Identificar la URL directa del mapa y la URL del iframe de la guía.
- [ ] Identificar copias públicas alternativas de la guía completa.

## Verificación de procedencia y pendientes consolidados

- Fecha de revisión: 20 de octubre de 2026.
- PDF del mapa identificado en el flujo alternativo Zone.Identifier de Windows: https://cesar.gov.co/d/filesmain/ofiturismo/plegable_cesar_2018.pdf
- Tanto HostUrl como ReferrerUrl contienen esa dirección.
- Evidencia técnica preservada: [procedencia_windows_zone_identifier.txt](fuentes/procedencia_windows_zone_identifier.txt).
- SHA-256 de ese archivo: 27B682961C61A481B7C34E714EF10600B5451C5F0DD386B507DF3EE013C68F99.
- El flujo de Windows ayuda a documentar la procedencia; puede modificarse y no sustituye una comprobación independiente de integridad o de disponibilidad actual.
- URL del iframe expuesta como enlace en la consulta web de la página: https://cdn.flipsnack.com/widget/flipsnackwidget.html?bgcolor=EEEEEE&hash=ftcm635po&t=1493137939
- La herramienta de consulta no recuperó el contenido del iframe. El acceso HTTP directo por PowerShell encontró un fallo de autenticación TLS y la revisión en navegador no completó la navegación. No se guardó un HTML válido y estos resultados no se interpretan como caída del sitio ni como ausencia de licencias.
- No se confirmó una descarga alternativa de la guía ni una licencia específica de reutilización.
- Git, consulta de solo lectura: git ls-files no devolvió archivos de evidencias/D01 ni evidencias/D02; git status mostró evidencias/ sin seguimiento. Incorporación a commit pendiente.
## Consulta de condiciones generales del sitio — 20 de octubre de 2026

Fuente: [Políticas de Seguridad y Condiciones de Uso de la Información](https://www.cesar.gov.co/d/es/nosotros/el-departamento/perfil-economico/2-uncategorised/2856-artpolpriv), apartado 4, Propiedad Intelectual.

Método: consulta del contenido recuperado por la herramienta de búsqueda web. No se preservó una copia íntegra de esta política.

Observación: la política distingue contenidos de la Gobernación y de terceros, restringe usos comerciales o promocionales sin autorización y menciona atribución para el uso personal y no comercial.

Límite: estas condiciones generales no identifican una licencia específica de los documentos turísticos. Su consulta no se registra como autorización comprobada para redistribuir los PDF completos en GitHub o Vercel.

- [x] Localizar y registrar las condiciones generales del sitio.
- [ ] Precisar las condiciones aplicables a la redistribución de cada documento.

## Precisión aportada por el autor

Luis Felipe Mora Lobo confirmó que descargó el mapa el 20 de octubre de 2026 a las 10:20 a. m., hora de Colombia, pulsando el mapa de la página institucional y después el botón de descarga del visor. Esta declaración sustituye la referencia inicial aproximada a las 10 a. m. y no atribuye esa hora a todas las capturas.

