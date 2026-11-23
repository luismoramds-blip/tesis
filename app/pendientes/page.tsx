import type { Metadata } from 'next';
import Link from 'next/link';
import SiteHeader from '../../components/SiteHeader';
import TaskTracker from '../../components/TaskTracker';
import roadmap from '../../content/roadmap.json';

export const metadata: Metadata = {
  title: 'Pendientes y seguimiento | Trabajo de grado',
  description: 'Balance del proyecto, prioridades y tareas trazables a los comentarios del profesor.',
};

export default function PendingPage() {
  return <>
    <SiteHeader active="pendientes" sections={[["balance", "Balance"], ["siguiente", "Próximo paso"], ["tareas", "Tareas"], ["tutor", "Tutor"], ["soporte", "Soporte"]]} />
    <main id="contenido" className="tracking-page">
      <header className="wrap tracking-cover"><div className="eyebrow">TRABAJO DE GRADO / PLAN DE SEGUIMIENTO</div><h1>De lo documentado<br />a lo que sigue.</h1><p className="tracking-cover-intro">{roadmap.assessment}</p><div className="tracking-cover-meta"><span>Revisión: {roadmap.reviewedAtLabel}</span><span>Plan {roadmap.version}</span></div><p className="tracking-cover-note">La preservación de fuentes y el diseño de un protocolo son avances comprobables. La evaluación de la arquitectura sigue pendiente.</p><a className="button" href="#tareas">Ver pendientes y registrar avances ↓</a></header>
      <TaskTracker />
    </main>
    <footer className="wrap"><div><strong>Seguimiento del trabajo de grado</strong><p>{roadmap.owner} · Maestría en Ingeniería de Software</p></div><p>Universidad de La Sabana<br /><small>Sitio del estudiante · No es un portal institucional</small></p><Link href="/tesis">Volver al trabajo de grado ←</Link></footer>
  </>;
}
