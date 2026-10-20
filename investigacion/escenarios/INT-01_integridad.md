# INT-01 Integridad de datos después de exportación y recuperación

Versión 0.1. Preparación: 20 de octubre de 2026. Responsable: Luis Felipe Mora Lobo.
Estado: protocolo propuesto, pendiente de revisión con el tutor. No se ha ejecutado el ensayo ni evaluado una arquitectura. Los umbrales se proponen antes de la prueba y cualquier cambio debe generar otra versión y una justificación.

## Propósito y relación con el diagnóstico

Comprobar si una solución conserva la información de referencia al exportarla y recuperarla en un entorno separado. D01 aporta los datos y su procedencia; D03 motiva la distinción entre conservar una referencia descriptiva y recuperar el contenido. Este ensayo no reproduce las causas históricas del caso SITUR ni mide sostenibilidad durante años.

## Escenario de calidad

| Elemento | Especificación |
| --- | --- |
| Fuente del estímulo | Responsable del ensayo actuando como operador de la solución evaluada. |
| Estímulo | Se solicita exportar la muestra y recuperarla en una instancia o herramienta separada. |
| Entorno | Prueba controlada con copia íntegra inicial. Después de exportar, no se permite consultar la instancia original ni sus credenciales durante la recuperación. El evaluador sí conserva una referencia independiente para comparar. |
| Artefacto | Los cinco registros turísticos E01–E05, sus campos, identificadores y referencias a D01. |
| Respuesta esperada | La solución entrega un paquete documentado que permite recuperar los cinco registros y sus valores, tipos, nulos y procedencia sin alteraciones silenciosas. |
| Medida | Cinco de cinco identificadores conservados; cero registros extra o duplicados; 125 de 125 valores escalares iguales; cero campos ausentes o adicionales en cada registro; cinco procedencias completas e iguales a la referencia. |

Estos umbrales de conservación exacta responden a que esta operación transporta información sin transformarla. No son umbrales universales de sostenibilidad. Las diferencias de orden de claves o formato JSON no representan pérdida de información.

## Referencia fijada antes de la prueba

- [Copia de la muestra](referencia_INT01/muestra_cinco_registros.json).
- [Manifest y campos esperados](referencia_INT01/manifest.json), con SHA-256 del archivo de referencia.
- Cinco registros, 25 valores escalares por registro y 125 en total, contando los seis campos de procedencia. Los valores null y false también cuentan.
- Los nombres originales y normalizados son campos distintos; ambos deben conservarse.
- Esta referencia es exploratoria y de una sola fuente, no una verdad territorial certificada ni un modelo canónico aprobado.

## Variables y reglas de comparación

La unidad principal es el registro identificado por id_local. El orden de los registros no afecta la comparación. Se comparan recursivamente nombres de campo, estructuras, valores y tipos. Se preservan tildes, caracteres Unicode, mayúsculas y saltos de línea de los textos originales; no se recortan espacios, no se normaliza Unicode ni se sustituyen nulos por cadenas vacías. Una propiedad ausente difiere de una propiedad con null. false difiere de 0 o de una cadena.

Un registro faltante aporta cero coincidencias de sus 25 valores. Un tipo o estructura de contenedor incorrecto cuenta como discrepancia; no debe quedar oculto por un resultado parcial. Los valores adicionales no mejoran la puntuación: se reportan como diferencias estructurales y hacen fallar el criterio de conservación exacta. Se comprueba además que el conjunto de identificadores sea exactamente E01–E05 y que no haya duplicados.

Si una alternativa exige transformar el esquema de datos, debe documentarse antes del ensayo una correspondencia reversible hacia este formato común. El adaptador, su versión y su esfuerzo se registran como parte de esa alternativa. No se corrige manualmente el resultado después de compararlo.

## Métricas y criterios propuestos

| Métrica | Cálculo | Aceptación propuesta |
| --- | --- | --- |
| Recuperación de identificadores | Identificadores de referencia recuperados / 5 × 100 | 100 %, sin extras ni duplicados |
| Conservación de valores | Valores escalares iguales en la ruta y tipo esperados / 125 × 100 | 100 % |
| Procedencia | Registros con los seis campos de procedencia iguales / 5 × 100 | 100 % |
| Diferencias estructurales | Campos ausentes, adicionales o con estructura incorrecta | 0 |
| Alteraciones de tipos y nulos | Diferencias de tipo o sustitución de null por otro valor | 0 |
| Tiempo de recuperación | Desde iniciar la recuperación hasta obtener la muestra utilizable | Registrar; sin umbral en este escenario |
| Intervención manual | Pasos correctivos y consultas a la instancia original | 0 correcciones posteriores no previstas; 0 consultas a la instancia original durante recuperación |

El escenario solo cumple si satisface todos los criterios obligatorios. Medir un hash de archivo no sustituye esta comparación semántica: una serialización equivalente puede tener bytes diferentes. La huella protege la copia exacta de referencia y cada paquete de evidencia.

## Procedimiento reproducible

1. Verificar la huella de la copia de referencia contra el manifest. Registrar versión de la solución, sistema, herramientas, operador, tamaño de muestra y guía utilizada.
2. Cargar E01–E05 en la alternativa. Recuperar su representación comparable y verificar que coincide con la referencia antes de provocar el estímulo. Si ya difiere, registrar una falla de preparación y no atribuir el defecto a la exportación.
3. Exportar usando el mecanismo documentado. Guardar el paquete sin editar, tamaño, SHA-256, comandos y mensajes. La referencia del evaluador no se añade al paquete para suplir datos ausentes de la solución.
4. Preparar un entorno separado y retirar acceso a la instancia original durante la recuperación. Registrar cómo se verificó esa condición; no borrar datos ni servicios reales.
5. Iniciar el cronómetro y recuperar usando únicamente el paquete y la guía previstos. Registrar dependencias de red o de proveedor que hayan sido necesarias; no se presupone trabajo sin internet.
6. Obtener la representación comparable, detener el cronómetro y guardar el resultado sin corregirlo. Aplicar el adaptador documentado si corresponde, conservando también el resultado anterior al adaptador.
7. Comparar contra la referencia por identificador y ruta de campo. Guardar todas las discrepancias, métricas y evidencias. Clasificar: cumple, no cumple, o ensayo inválido por incumplimiento del protocolo.
8. Conservar los resultados incluso si no favorecen la alternativa. No cambiar los umbrales a partir del resultado.

## Comprobación del instrumento antes del ensayo

El comparador todavía debe implementarse y verificarse con casos controlados: copia equivalente con distinto orden de claves; pérdida de E03; duplicación de un identificador; alteración de un carácter; conversión de null a cadena vacía; pérdida de una procedencia; campo inesperado. Solo la primera variante debe cumplir. Estos controles verifican el instrumento y no son resultados de la arquitectura.

## Registro de resultados pendiente

| Campo | Valor |
| --- | --- |
| Alternativa, versión y operador | Pendiente |
| Fecha y entorno de ejecución | Pendiente |
| SHA-256 y tamaño del paquete exportado | Pendiente |
| Guía y adaptador utilizado | Pendiente |
| Recuperación de identificadores y conservación de valores | No medido |
| Procedencias conservadas y diferencias estructurales | No medido |
| Tiempo, intervención y dependencias necesarias | No medido |
| Resultado del escenario | No ejecutado |
| Incidencias y amenazas a la validez | Pendiente de ejecución |

## Alcance y amenazas a la validez

El ensayo cubre integridad de la muestra recuperada, no disponibilidad pública continuada, vigencia factual, actualización por personal no técnico, pérdida de dominio ni pérdida real de financiación. Conservar la referencia a un PDF no garantiza disponer de ese PDF: preservación de documentos y resolución de enlaces deberán tener un escenario propio. Cinco registros de un folleto no permiten generalizar a todo el Cesar, otras fuentes, grandes volúmenes ni a otros SITUR.

La definición teórica de sostenibilidad operativa, su relación con atributos de calidad y su sustento bibliográfico siguen pendientes. El protocolo es una propuesta operativa que debe revisarse antes de seleccionar y puntuar alternativas.

## Próxima actividad

Implementar y comprobar el comparador con los controles indicados. Después definir escenarios separados de actualización y recuperación por terceros, con medidas y umbrales justificados antes de construir la prueba de concepto.
