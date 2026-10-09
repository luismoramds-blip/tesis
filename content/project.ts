export const project = {
  title: "Arquitectura de referencia orientada a la sostenibilidad operativa",
  subtitle:
    "Sistemas de información turística territorial · Caso del departamento del Cesar",
  author: "Luis Felipe Mora Lobo",
  updated: "9 de octubre de 2026",
  summary:
    "Una propuesta para diseñar sistemas cuya información pueda conservarse, consultarse y recuperarse cuando se interrumpen los recursos que sostienen su operación. El turismo del Cesar es el contexto de aplicación; la arquitectura de software es el objeto de estudio.",
  question:
    "¿Qué decisiones arquitectónicas permiten que un sistema de información turística territorial permanezca disponible, íntegro y actualizable cuando cesan la financiación y el equipo que lo originaron?",
  objectives: [
    "Diagnosticar el estado actual de la información turística del Cesar y las causas técnicas de discontinuidad de sus iniciativas digitales previas.",
    "Definir un modelo canónico que integre atractivos, prestadores registrados y unidades territoriales.",
    "Evaluar alternativas arquitectónicas frente a criterios explícitos de sostenibilidad operativa y documentar su selección.",
    "Validar la alternativa seleccionada con datos reales de una muestra de cinco municipios.",
  ],
  criteria: [
    [
      "Costo de operación",
      "Costo monetario mensual para mantener el sistema disponible.",
    ],
    [
      "Dependencias de pago",
      "Componentes cuya caducidad de pago interrumpe el servicio.",
    ],
    [
      "Carga de mantenimiento",
      "Horas anuales estimadas de intervención especializada.",
    ],
    [
      "Reconstruibilidad",
      "Esfuerzo para que un tercero restituya el sistema desde sus artefactos.",
    ],
    [
      "Supervivencia de los datos",
      "Accesibilidad de la información si falla la presentación.",
    ],
    [
      "Independencia de proveedor",
      "Acoplamiento a servicios propietarios no sustituibles.",
    ],
  ],
  phases: [
    [
      "01",
      "Diagnóstico",
      "Semanas 1–4",
      "Caracterizar fuentes y reconstruir la trayectoria de las plataformas.",
      "Documento de diagnóstico",
    ],
    [
      "02",
      "Modelado",
      "Semanas 5–8",
      "Definir entidades, relaciones, identificadores y validaciones.",
      "Especificación del modelo canónico",
    ],
    [
      "03",
      "Evaluación y diseño",
      "Semanas 9–12",
      "Comparar alternativas y documentar decisiones y compromisos.",
      "Arquitectura y matriz de evaluación",
    ],
    [
      "04",
      "Validación y cierre",
      "Semanas 13–16",
      "Construir la prueba de concepto, evaluar y elaborar la guía.",
      "Prueba de concepto y documento final",
    ],
  ],
  municipalities: [
    ["Valledupar", "20001", "Capital y concentración de prestadores"],
    ["Aguachica", "20011", "Sur del departamento y formalidad registral"],
    ["Chimichagua", "20175", "Ciénaga de Zapatosa y vocación turística"],
    ["Pueblo Bello", "20570", "Sierra Nevada y brecha documental"],
    ["Río de Oro", "20614", "Patrimonio y escala municipal pequeña"],
  ],
  alternatives: [
    "Monolito con base de datos gestionada",
    "Servicios desplegados en nube",
    "Plataforma administrada de terceros",
    "Arquitectura estática orientada a datos",
  ],
  references: [
    [
      "Bass, Clements y Kazman · Software Architecture in Practice",
      "4.ª edición · 2021",
      "",
    ],
    [
      "Cervantes y Kazman · Designing Software Architectures",
      "Attribute-Driven Design · 2016",
      "",
    ],
    [
      "Kazman, Klein y Clements · ATAM",
      "CMU/SEI-2000-TR-004 · 2000",
      "https://www.sei.cmu.edu/library/atam-method-for-architecture-evaluation/",
    ],
    [
      "ISO/IEC/IEEE 42010",
      "Descripción de arquitectura · edición 2022 para revisar con el tutor",
      "https://www.iso.org/standard/74393.html",
    ],
    [
      "ISO/IEC 25010",
      "Modelo de calidad de producto · edición 2023 para revisar con el tutor",
      "https://www.iso.org/standard/78176.html",
    ],
    [
      "Fuentes territoriales e institucionales",
      "Plan Sectorial de Turismo, RNT, DIVIPOLA y PorTuColombia · enlaces específicos pendientes",
      "",
    ],
  ],
};
