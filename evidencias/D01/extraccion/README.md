# Extracción exploratoria del Mapa Turístico del Cesar

Fuente: [PDF preservado](../plegable_cesar_2018.pdf), página 1. SHA-256: 97F2E604B58359AD40D52AE33C7FB5B3B3ED8E7979F5D69343ED81EDCBC40190.

Método: extracción completa mediante pypdf, extracción de palabras y coordenadas mediante pdfplumber y revisión visual de una reproducción completa. Los encabezados gráficos se identificaron visualmente. Los tipos son etiquetas de análisis provisionales, no categorías oficiales. Se conservan español e inglés en el texto bruto; no se presupone equivalencia exacta de traducciones.

## Correcciones a la muestra inicial

- El texto que comienza «Representa un sistema de humedales» corresponde al bloque independiente «Ciénaga de la Zapatosa», no al cuerpo de Chimichagua.
- Pueblo Bello es el encabezado del PDF; «Puebl bello» fue un error en el mensaje del autor.
- El documento usa «Playas del Amor» en Chimichagua y «Las Playas de Amor» en el bloque de la ciénaga. Se mantienen ambas menciones; su identidad común queda pendiente de contraste.
- No todos los bloques son municipios: Nabusimake, el humedal y el contexto departamental requieren tipos diferentes.

## Bloques descriptivos cotejados

| ID | Encabezado visual | Tipo provisional | Evento destacado | Ubicación |
| --- | --- | --- | --- | --- |
| M01 | Valledupar | municipio | Festival de la Leyenda Vallenata. | superior derecha |
| M02 | Pueblo Bello | municipio | Festival del Café y de la Mochila Arhuaca. | superior izquierda |
| M03 | Chimichagua | municipio | Festival de Danzas, Tamboras y la Canción Inédita. | derecha, zona media |
| M04 | Ciénaga de la Zapatosa | humedal | No indicado | inferior derecha |
| M05 | Manaure — Balcón Turístico | municipio, denominación editorial | Fiestas de la Virgen del Carmen. | derecha, zona media superior |
| M06 | Nabusimake | asentamiento / lugar descrito | No indicado | izquierda, zona media |
| M07 | Río de Oro | municipio | Carnaval de Río de Oro. | inferior izquierda central |
| M08 | Departamento del Cesar | contexto departamental | No indicado | inferior izquierda |

## Archivos de trabajo

- [Descripciones completas en español](descripciones_es.md): ocho cuerpos separados con su encabezado y localización.

- [Texto completo extraído](texto_completo_extraido.txt): conserva el orden de extracción, que no equivale al orden de lectura visual.
- [Bloques descriptivos](bloques_descriptivos.json): encabezados, regiones de revisión, menciones y actividades.
- [Menciones turísticas](menciones_turisticas.csv): tabla editable para depurar entidades y relaciones.
- [Palabras con coordenadas](palabras_con_coordenadas.json): extracción de toda la página para localizar texto.
- [Palabras del mapa central](mapa_central_palabras.json): apoyo cartográfico sin convertir cifras en atributos turísticos.

## Condiciones y límites

No se modificó el PDF. Las coordenadas son posiciones sobre la página, no latitud/longitud. No se verifica vigencia, clasificación oficial, horarios, direcciones ni pertenencia administrativa. No se deducen restricciones actuales de acceso a partir del folleto.

El bloque de Nabusimake incluye una advertencia de solicitar autorización a líderes indígenas y respetar la comunidad y el medio ambiente; debe conservarse como condición expresada por la fuente, sin prometer acceso turístico.

Se conservaron nombres, créditos y leyenda en el texto completo cuando son extraíbles. La leyenda visual muestra avistamiento de aves, reserva indígena, ferias y fiestas, turismo religioso, ecoturismo y turismo cultural. Los pictogramas no se asignaron automáticamente a entidades. Los títulos gráficos pueden no estar en el texto extraído.

Los recortes rectangulares son ayudas de lectura y pueden incluir contenido vecino. La extracción completa no equivale a una transcripción literal verificada carácter por carácter; antes de publicar datos finales debe revisarse cada registro contra el PDF.

## Uso en la investigación

Esta extracción sustituye la recolección manual de cinco fragmentos por una revisión de los ocho bloques descriptivos. Permite diseñar pruebas de separación de entidades, conservación de procedencia, normalización controlada y detección de campos ausentes. No valida todavía un modelo canónico ni la arquitectura.

Siguiente tarea: revisar cada mención, asignar identificadores locales y relacionarla con su bloque de origen, conservando texto original y nombre normalizado en campos separados.

## Revisión del autor y primera muestra

Luis Felipe Mora Lobo confirmó en la conversación que las descripciones están bien. Se preparó una [muestra exploratoria de cinco registros](muestra_cinco_registros.md), separando texto de contexto, tipos provisionales y datos no determinados. La confirmación no verifica vigencia ni aprueba un modelo canónico.
