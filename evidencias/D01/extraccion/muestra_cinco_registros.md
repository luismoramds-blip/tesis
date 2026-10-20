# Primera muestra estructurada de cinco registros

Esta confirmación corresponde a la revisión del contenido transcrito; no verifica su actualidad ni valida el modelo de datos.

Selección exploratoria de una sola fuente: permite estudiar separación de entidades y procedencia. No sustituye una muestra con heterogeneidad entre fuentes.

| ID | Nombre normalizado | Tipo provisional | Contexto territorial | Bloque |
| --- | --- | --- | --- | --- |
| E01 | Catedral de Nuestra Señora del Rosario | lugar / edificación religiosa | Valledupar | M01 |
| E02 | Jardín Botánico Buzintana | lugar / jardín botánico | Pueblo Bello | M02 |
| E03 | Pozo del Higuerón | lugar / pozo | Chimichagua | M03 |
| E04 | Ciénaga de la Zapatosa | lugar / humedal | Sin municipio exclusivo determinado | M04 |
| E05 | Festival de la Leyenda Vallenata | evento / festival | Valledupar | M01 |

## Reglas de transformación aplicadas

- Conservar nombre original y nombre normalizado por separado. Los identificadores E01–E05 son locales, no códigos oficiales.
- Conservar la página, bloque, zona y SHA-256 del PDF como procedencia.
- Separar el texto contextual municipal de una descripción individual del lugar o evento. Solo el humedal dispone aquí de un párrafo propio.
- No asignar coordenadas, direcciones, contactos, DIVIPOLA o fechas de eventos sin evidencia. En JSON se representan como null; en CSV, como celdas vacías.
- Registrar la clasificación como provisional. El folleto no valida una taxonomía oficial.
- No asignar la ciénaga exclusivamente a Chimichagua ni fusionar variantes de nombres sin contraste.

## Uso inmediato para diseñar escenarios

1. Integridad: exportar e importar estos cinco registros y comprobar campos, texto original, nulos y procedencia. La aceptación cuantitativa se fijará antes del experimento.
2. Actualización: preparar una modificación controlada con un dato ficticio claramente marcado en una copia de prueba; conservar el original y el historial.
3. Recuperación: preparar un paquete con datos y guía y evaluar si un tercero recupera la muestra sin la aplicación original. Aún no se ejecutó la prueba.

Estos registros son insumos para definir escenarios. No se ha validado una arquitectura, interoperabilidad con estándares ni sostenibilidad a largo plazo.

## Archivos

- [JSON con procedencia y campos faltantes](muestra_cinco_registros.json).
- [CSV para inspección](muestra_cinco_registros.csv).
