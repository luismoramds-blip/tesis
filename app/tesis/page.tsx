import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import { project as p } from '../../content/project';
import { chapters } from '../../content/thesis';
import { evidence } from '../../content/evidence';
import EvidenceArchive from '../../components/EvidenceArchive';
export const metadata: Metadata = { title: 'Trabajo de grado en desarrollo | Proyecto Cesar' };
export default function ThesisPage() {
 return <><SiteHeader active="tesis" sections={[["capitulos","Capítulos"],["evidencias","Evidencias"],["avances","Avances"]]} /><main id="contenido"><section className="section wrap thesis-intro"><div className="eyebrow">TRABAJO DE GRADO · DIAGNÓSTICO EN CURSO</div><h1>Desarrollo del trabajo de grado</h1><p className="subtitle">{p.title}</p><p className="intro">Espacio para consolidar los capítulos, evidencias y decisiones del proyecto. La estructura es preliminar y se acordará con el tutor.</p><p className="muted">{p.author} · Tutor pendiente de formalización</p><a className="text-link" href="/">Volver a la propuesta de anteproyecto ←</a></section><section id="capitulos" className="tinted"><div className="section wrap"><div className="section-head"><div className="eyebrow">ESTRUCTURA PRELIMINAR</div><h2>Estado de los capítulos</h2><p>El diagnóstico está en curso con evidencia preliminar. Los demás capítulos están pendientes; su desarrollo y revisión se acordarán con el tutor.</p></div><div className="chapter-list">{chapters.map((chapter,index)=><article id={chapter.id} key={chapter.id}><div className="chapter-heading"><span className="chapter-number">0{index+1}</span><div><span className={chapter.status === "En curso" ? "status in-progress" : "status"}>{chapter.status}</span><h3>{chapter.title}</h3></div></div><p>{chapter.purpose}</p>{chapter.id === "diagnostico" && <a className="text-link" href="#evidencias">Consultar registros D01–D04 →</a>}<details><summary>{chapter.id === "diagnostico" ? "Avances y pendientes" : "Actividades previstas"}</summary><ul className="academic-list">{chapter.tasks.map(task=><li key={task}>{task}</li>)}</ul></details></article>)}</div></div></section><section id="evidencias" className="section wrap"><div className="section-head"><div className="eyebrow">DIAGNÓSTICO / REGISTRO PRELIMINAR</div><h2>Disponibilidad y publicación de la información</h2><p>Primeras observaciones sobre fuentes oficiales y el dominio de SITUR Cesar. Los registros distinguen lo observado de las interpretaciones y los aspectos pendientes de verificación.</p></div><div className="evidence-list"><p className="evidence-intro">La información turística del Cesar permanece publicada parcialmente en documentos y visores externos. Existen referencias institucionales a SITUR Cesar, pero en la consulta del 9 de octubre de 2026 no se logró recuperar contenido turístico de su dominio. Esto motiva el análisis de la disponibilidad, las dependencias de publicación y la reutilización de la información.</p><p className="muted">Actualización: 20 de octubre de 2026. D01 y D02 incorporan archivos, capturas, huellas y enlaces archivados. D03 documenta la recuperación de la publicación y ficha históricas, con el informe completo aún no recuperado. D04 requiere verificación directa; el diagnóstico continúa en curso.</p>{evidence.map(item=><article id={item.id.toLowerCase()} key={item.id}><div className="chapter-heading"><span className="chapter-number">{item.id}</span><div><span className="status">{item.status}</span><h3>{item.title}</h3></div></div><p className="evidence-meta">Consulta: {item.date}</p><a className="text-link" href={item.url} target="_blank" rel="noopener noreferrer">{item.source} ↗</a><dl><dt>Procedimiento</dt><dd>{item.method}</dd><dt>Observación</dt><dd>{item.observation}</dd><dt>Interpretación</dt><dd>{item.interpretation}</dd><dt>Límite de la evidencia</dt><dd>{item.limitation}</dd><dt>Verificación pendiente</dt><dd>{item.next}</dd></dl><EvidenceArchive id={item.id} /></article>)}</div></section>
        <section id="avances" className="section wrap advances">
          <div className="section-head">
            <div>
              <div className="eyebrow">04 / SEGUIMIENTO</div>
              <h2>Una propuesta en construcción.</h2>
            </div>
            <p>
              Este espacio registra hitos y decisiones. Las fechas de ejecución
              se acordarán con el tutor.
            </p>
          </div>
          <div className="progress-list">
            <div>
              <span className="status ready">Disponible</span>
              <h3>Anteproyecto inicial</h3>
              <p>Problema, objetivos, alcance y ruta de solución formulados.</p>
            </div>
            <div>
              <span className="status">Pendiente</span>
              <h3>Formalización del tutor</h3>
              <p>
                Aceptación, revisión del alcance y expediente para la
                Subcomisión.
              </p>
            </div>
            <div>
              <span className="status">Planificado</span>
              <h3>Desarrollo y evaluación</h3>
              <p>
                D01 y D02 ampliados con preservación documental. D03 incorpora diez capturas y la secuencia de recuperación del informe. D04 mantiene pendiente el contraste directo del dominio.
              </p>
            </div>
          </div>
          <div className="log">
            <span>BITÁCORA / 001</span>
            <div>
              <h3>Presentación web del anteproyecto</h3>
              <p>
                {p.updated} · Organización de la propuesta para revisión.
                Próximo hito: acordar métricas, evidencia y alcance con el
                tutor.
              </p>
            </div>
          </div>
          <div className="log"><span>BITÁCORA / 002</span><div><h3>Inicio del diagnóstico documental</h3><p>9 de octubre de 2026 · Registros D01–D04 incorporados con fuente, procedimiento, observación y límites. Próximo paso: preservar las fuentes y contrastar el acceso al dominio con registros históricos.</p></div></div>
          <div className="log"><span>BITÁCORA / 003</span><div><h3>Preservación y contraste de D01 y D02</h3><p>20 de octubre de 2026 · Se incorporan dos PDF, once capturas, registros de preservación y huellas SHA-256. D01 distingue la guía de Flipsnack del mapa descargable y documenta el fallo de descarga y las consultas DNS. D02 localiza la ficha S.02 en PDF 182 / impresa 175. Se diferencia la reproducción histórica de febrero de la captura solicitada en octubre.</p></div></div>
        </section></main><footer className="wrap"><div><strong>Proyecto Cesar</strong><p>Trabajo de grado en desarrollo · {p.author}</p></div><p>Maestría en Ingeniería de Software<br/>Universidad de La Sabana<br/><small>Sitio del estudiante · No es un portal institucional</small></p><a href="/">Anteproyecto ←</a></footer></>;
}



