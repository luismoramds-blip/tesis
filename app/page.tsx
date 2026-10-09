import { project as p } from "../content/project";
import SiteHeader from "../components/SiteHeader";


const nav = [
  ["resumen", "Resumen"],
  ["propuesta", "Propuesta"],
  ["metodologia", "Metodología"],
  ["cesar", "Caso Cesar"],
  ["formalizacion", "Formalización"],
  ["referencias", "Referencias"],
];
export default function Home() {
  return (
    <>
      <SiteHeader active="anteproyecto" sections={nav} />
      <main id="contenido">
        <section className="hero wrap">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="dot" /> ANTEPROYECTO · EN REVISIÓN
            </div>
            <h1>{p.title}</h1>
            <p className="subtitle">{p.subtitle}</p>
            <p className="intro">{p.summary}</p>
            <div className="actions">
              <a className="button" href="#propuesta">
                Explorar la propuesta <span>↗</span>
              </a>
            </div>
            <div className="author">
              <span className="avatar">LM</span>
              <div>
                <strong>{p.author}</strong>
                <small>Estudiante · Universidad de La Sabana</small>
              </div>
            </div>
          </div>
          <aside className="hero-panel">
            <div className="panel-top">
              EL RETO ARQUITECTÓNICO <span>01 / 04</span>
            </div>
            <h2>
              Que la información
              <br />
              permanezca.
            </h2>
            <p>
              Diseñar para un contexto donde la financiación y el equipo técnico
              no están garantizados.
            </p>
            <div className="diagram">
              <div>FUENTES TERRITORIALES</div>
              <span>↓</span>
              <div>MODELO CANÓNICO</div>
              <span>↓</span>
              <div className="diagram-last">
                DATOS PRESERVABLES
                <br />
                <small>Consulta · Recuperación · Actualización</small>
              </div>
            </div>
            <div className="panel-foot">
              16 semanas propuestas <span>5 municipios</span>
            </div>
          </aside>
        </section>
        <div className="facts wrap">
          <div>
            <small>MODALIDAD</small>
            <strong>Proyecto académico propio</strong>
          </div>
          <div>
            <small>CONFORMACIÓN</small>
            <strong>Individual</strong>
          </div>
          <div>
            <small>TUTOR</small>
            <strong>Pendiente de formalización</strong>
          </div>
          <div>
            <small>VERSIÓN WEB</small>
            <strong>{p.updated}</strong>
          </div>
        </div>
        <section id="resumen" className="section wrap abstract-section" aria-labelledby="resumen-titulo">
          <div className="eyebrow">PRESENTACIÓN DEL TRABAJO</div>
          <h2 id="resumen-titulo">Resumen</h2>
          <div className="abstract-reading">
            <p>Los departamentos colombianos han implementado sistemas de información turística territorial financiados mediante convenios con FONTUR y el Ministerio de Comercio, Industria y Turismo. En el departamento del Cesar se identifica un patrón de discontinuidad operativa: iniciativas digitales sucesivas dejaron de estar disponibles al público pocos años después de su puesta en marcha, sin que la información recolectada permaneciera accesible tras la caída de las plataformas.</p>
            <p>Este trabajo aborda el fenómeno como un problema de arquitectura de software y no de gestión turística. Se propone caracterizar y diagnosticar el estado actual de la información turística del departamento y las causas técnicas de la discontinuidad; definir un modelo <strong>canónico</strong> e <strong>interoperable</strong> de datos turísticos territoriales; evaluar alternativas arquitectónicas frente a criterios explícitos de sostenibilidad operativa; y validar la alternativa seleccionada mediante una prueba de concepto con datos reales de una muestra de municipios.</p>
            <p>El aporte central es la formulación de la sostenibilidad operativa como atributo de calidad priorizado, con criterios de evaluación definidos y medibles, en un contexto institucional donde la financiación es intermitente y no existe garantía de equipo técnico permanente.</p>
          </div>
        </section>
        <section id="propuesta" className="section wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">01 / LA PROPUESTA</div>
              <h2>Planteamiento del problema</h2>
            </div>
            <p>
              El diseño debe responder tanto al funcionamiento cotidiano como a
              la interrupción de la operación.
            </p>
          </div>
          <div className="problem-context">
            <h3>Contexto</h3>
            <p>El departamento del Cesar cuenta con información turística producida por distintas fuentes institucionales: el inventario y la priorización de atractivos turísticos levantados en el marco del Plan Sectorial de Turismo departamental, el Registro Nacional de Turismo (RNT) que consolida los prestadores de servicios formales, y las estadísticas territoriales del portal PorTuColombia del MinCIT, que para el departamento del Cesar reúnen indicadores de fuentes administrativas nacionales con corte en 2022.</p>
          </div>
          <div className="split">
            <div>
              <h3>Información dispersa, acceso frágil</h3>
              <p>
                El anteproyecto identifica formatos heterogéneos, ausencia de un
                modelo compartido y discontinuidad en iniciativas digitales del
                Cesar. La disponibilidad del portal y la preservación de sus
                datos requieren mecanismos diferenciados.
              </p>
              <p>
                El diagnóstico contrastará las hipótesis técnicas con las
                fuentes disponibles. La cronología de los portales se
                documentará con capturas y registros históricos.
              </p>
              <details>
                <summary>Pregunta orientadora del anteproyecto</summary>
                <p>{p.question}</p>
              </details>
              <details open>
                <summary>Justificación y aporte esperado</summary>
                <p>
                  Integrar atributos de calidad, modelado interoperable y
                  análisis de compromisos para formular una arquitectura de
                  referencia aplicable a instituciones con recursos
                  intermitentes. La transferencia a otros territorios se
                  discutirá como posibilidad, no como resultado demostrado.
                </p>
              </details>
            </div>
            <div>
              <h3>Objetivo general</h3>
              <p className="objective">
                Diseñar y validar una arquitectura de referencia para sistemas
                de información turística territorial que priorice la
                sostenibilidad operativa como atributo de calidad, aplicada al
                caso del departamento del Cesar.
              </p>
              <ol className="objectives">
                {p.objectives.map((o, i) => (
                  <li key={o}>
                    <span>0{i + 1}</span>
                    {o}
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <div className="scope">
            <div>
              <h3>Alcance comprometido</h3>
              <p>
                Diagnóstico, modelo canónico, comparación documental,
                arquitectura de referencia, prueba de concepto en cinco
                municipios y guía de implementación y operación.
              </p>
            </div>
            <div>
              <h3>Límites del proyecto</h3>
              <p>
                Sin despliegue institucional, inventario de campo ni cobertura
                de los 25 municipios. Se construirá una sola alternativa; las
                demás se compararán analíticamente.
              </p>
            </div>
          </div>
        </section>
        <section id="metodologia" className="tinted">
          <div className="section wrap">
            <div className="section-head">
              <div>
                <div className="eyebrow">02 / RUTA DE SOLUCIÓN</div>
                <h2>Del diagnóstico a la validación.</h2>
              </div>
              <p>
                Diseño guiado por atributos de calidad con ADD y evaluación
                inspirada en ATAM, adaptada a una comparación documental.
              </p>
            </div>
            <div className="phases">
              {p.phases.map(([n, title, time, desc, result]) => (
                <article key={n}>
                  <span className="phase-number">{n}</span>
                  <small>{time}</small>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="deliverable">
                    ENTREGABLE<strong>{result}</strong>
                  </div>
                </article>
              ))}
            </div>
            <h3 className="subheading">
              Seis criterios para comparar las decisiones
            </h3>
            <div className="criteria">
              {p.criteria.map(([name, desc], i) => (
                <article key={name}>
                  <span>0{i + 1}</span>
                  <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                  </div>
                </article>
              ))}
            </div>
            <details>
              <summary>Alternativas por evaluar</summary>
              <ul>
                {p.alternatives.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <p>
                Los pesos, escalas, umbrales y supuestos se documentarán antes
                de seleccionar la alternativa. Aún no existe una arquitectura
                seleccionada.
              </p>
            </details>
          </div>
        </section>
        <section id="cesar" className="section wrap">
          <div className="section-head">
            <div>
              <div className="eyebrow">03 / CONTEXTO TERRITORIAL</div>
              <h2>Cinco municipios, distintas condiciones.</h2>
            </div>
            <p>
              Muestra intencional por contraste. La selección preliminar podrá
              ajustarse durante el diagnóstico.
            </p>
          </div>
          <div className="territory">
            <div className="territory-intro">
              <span>COLOMBIA / CESAR</span>
              <h3>La diversidad de las fuentes pone a prueba el modelo.</h3>
              <p>
                Atractivos turísticos, prestadores registrados y unidades
                territoriales constituyen las capas iniciales de integración.
              </p>
              <small>
                Los códigos y las fuentes se verificarán en la fase de
                diagnóstico.
              </small>
            </div>
            <div className="municipalities">
              {p.municipalities.map(([name, code, desc]) => (
                <article key={code}>
                  <div>
                    <h3>{name}</h3>
                    <p>{desc}</p>
                  </div>
                  <span>{code}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="formalizacion" className="section wrap">
          <div className="section-head"><div className="eyebrow">EXPEDIENTE DE LA PROPUESTA</div><h2>Formalización con el tutor</h2><p>La propuesta se presenta en la opción 1 de trabajo de grado, de forma individual. El alcance y la metodología inicial se revisarán con el tutor.</p></div>
          <div className="split"><div><h3>Pendientes para presentar el expediente</h3><ul className="academic-list"><li>Nombre y aceptación del tutor.</li><li>Síntesis de su experiencia u hoja de vida, especialmente si es externo.</li><li>Firmas del estudiante y del tutor.</li><li>Fechas de entrega confirmadas por la universidad.</li></ul><p>Estos documentos acompañarán el trámite institucional; la página presenta el contenido académico de la propuesta.</p></div><div><h3>Resultados esperados</h3><ul className="academic-list"><li>Diagnóstico y especificación del modelo canónico.</li><li>Matriz de evaluación y arquitectura de referencia.</li><li>Prueba de concepto y conjunto de datos, sujeto a condiciones de reutilización.</li><li>Guía de implementación y operación, y documento final.</li></ul><p><a className="text-link" href="/tesis">Consultar el desarrollo del trabajo de grado →</a></p></div></div>
        </section>
        <section id="referencias" className="tinted">
          <div className="section wrap">
            <div className="eyebrow">05 / BASE DOCUMENTAL</div>
            <h2>Referencias y fuentes.</h2>
            <p className="muted">
              Selección preliminar. Las ediciones y fuentes específicas se revisarán durante el trabajo.
            </p>
            <div className="references">
              {p.references.map(([name, detail, url]) => (
                <article key={name}>
                  <div>
                    <h3>{name}</h3>
                    <p>{detail}</p>
                  </div>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={"Consultar " + name}
                    >
                      ↗
                    </a>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <div>
          <strong>Proyecto Cesar</strong>
          <p>Propuesta personal de trabajo de grado · {p.author}</p>
        </div>
        <p>
          Maestría en Ingeniería de Software
          <br />
          Universidad de La Sabana
          <br />
          <small>Sitio del estudiante · No es un portal institucional</small>
        </p>
        <a href="#">Volver al inicio ↑</a>
      </footer>
    </>
  );
}








