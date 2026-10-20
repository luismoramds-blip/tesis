import type { Metadata } from 'next';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown, { defaultUrlTransform } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SiteHeader from '../../../../components/SiteHeader';
import preservation from '../../../../content/preservation.json';

type Props = { params: Promise<{id:string}> };
export const dynamicParams = false;
export function generateStaticParams() { return preservation.map(record=>({id:record.id})); }
function getRecord(id:string) {
 const record=preservation.find(item=>item.id===id);
 if(!record) notFound();
 const markdown=readFileSync(path.join(process.cwd(),'evidencias',record.id,'registro.md'),'utf8');
 const title=markdown.split(/\r?\n/).find(line=>line.startsWith('# '))?.slice(2) ?? `Registro ${id}`;
 return {record,markdown,title};
}
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const {id}=await params;
 return {title:`${getRecord(id).title} | Registro de evidencia`};
}
export default async function EvidenceRecord({params}:Props) {
 const {id}=await params;
 const {record,markdown,title}=getRecord(id);
 let codeBlock=false;
 const sections=markdown.split(/\r?\n/).flatMap((line,index)=>{
  if(line.startsWith('```')) { codeBlock=!codeBlock; return []; }
  return !codeBlock&&line.startsWith('## ')?[{label:line.slice(3),id:`seccion-${index+1}`}]:[];
 });
 function assetUrl(url:string) {
  const safe=defaultUrlTransform(url);
  if(!safe || /^(https?:|mailto:|#|\/)/i.test(safe)) return safe;
  const resolved=new URL(safe,`https://evidence.invalid/evidencias/${id}/`);
  return resolved.pathname.startsWith(`/evidencias/${id}/`)?resolved.pathname+resolved.search+resolved.hash:'';
 }
 const markdownFile=record.files.find(file=>file.kind==='md');
 const captures=record.files.filter(file=>file.kind==='png');
 return <><SiteHeader active="tesis" sections={[["registro","Registro"],["indice","Índice"],["capturas","Capturas"]]} /><main id="contenido"><header className="record-cover wrap"><Link className="text-link" href={`/tesis#${id.toLowerCase()}`}>← Volver a la evidencia {id}</Link><div className="eyebrow">REGISTRO DE PRESERVACIÓN · {id}</div><h1>{title}</h1><p className="intro">Lectura del registro documental, con sus fuentes, verificaciones y límites. El contenido se obtiene del archivo Markdown original.</p><div className="actions"><a className="button" href={`/evidencias/${id}/registro.md`} download={`registro-${id}.md`}>Descargar registro .md ↓</a><a className="text-link" href="#capturas">Ver capturas ({captures.length})</a></div>{markdownFile&&<details className="record-fingerprint"><summary>Huella SHA-256 del registro</summary><p className="hash-value">{markdownFile.sha256}</p></details>}</header><div className="record-layout wrap"><aside id="indice" className="record-index"><details open><summary>En este registro</summary><nav aria-label="Índice del registro">{sections.map(section=><a key={section.id} href={`#${section.id}`}>{section.label}</a>)}</nav></details></aside><article id="registro" className="markdown-record"><ReactMarkdown remarkPlugins={[remarkGfm]} urlTransform={assetUrl} components={{
  h1:()=>null,
  h2:({node,children,...props})=><h2 {...props} id={`seccion-${node?.position?.start.line}`}>{children}</h2>,
  table:({children,...props})=><div className="record-table" role="region" aria-label="Tabla del registro" tabIndex={0}><table {...props}>{children}</table></div>,
  a:({href,children,...props})=><a {...props} href={href} {...(href?.startsWith('http')?{target:'_blank',rel:'noopener noreferrer'}:{})}>{children}</a>,
 }}>{markdown}</ReactMarkdown></article></div><section id="capturas" className="section wrap record-gallery"><div className="section-head"><div className="eyebrow">SOPORTE VISUAL</div><h2>Capturas preservadas</h2><p>Abre cada imagen para verla a su resolución original. Las capturas complementan el registro y conservan sus límites de evidencia.</p></div><div className="record-images">{captures.map(file=><figure key={file.url}><a href={file.url} target="_blank" rel="noopener noreferrer"><img src={file.url} alt={file.label} loading="lazy" /></a><figcaption><a href={file.url} target="_blank" rel="noopener noreferrer">{file.label} ↗</a><small>{file.name}</small></figcaption></figure>)}</div></section></main><footer className="wrap"><div><strong>Registro {id}</strong><p>Investigación de Luis Felipe Mora Lobo</p></div><Link href={`/tesis#${id.toLowerCase()}`}>Volver al trabajo de grado ←</Link></footer></>;
}
