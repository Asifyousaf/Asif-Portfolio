import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { projects, otherWork } from "@/lib/portfolio";

export function SelectedWork() {
  return <section id="work" className="work-section section-shell">
    <div className="section-label"><span>01 / SELECTED WORK</span><span>REAL PROBLEMS. WORKING PRODUCTS.</span></div>
    <div className="section-title-row reveal"><h2>Built to make<br /><span className="text-muted-foreground">a difference.</span></h2><p>A selection of web, mobile and AI<br />products. From idea to deployment.</p></div>
    <div className="project-editorial">{projects.map((project, i) => <article className={`project-feature project-${i} reveal`} key={project.slug}><Link to="/work/$slug" params={{ slug: project.slug }} className="project-image-link" aria-label={`View ${project.title} case study`}><div className="project-image-frame"><img src={project.image} alt={project.alt} loading="lazy" width="1536" height="768" /><span className="image-open"><ArrowUpRight /></span><span className="project-index">PROJECT / {project.number}</span></div></Link><div className="project-caption"><div><span className="eyebrow">{project.category}</span><h3><Link to="/work/$slug" params={{ slug: project.slug }}>{project.title}</Link></h3><p>{project.short}</p></div><Link to="/work/$slug" params={{ slug: project.slug }} className="case-link" aria-label={`Read ${project.title} case study`}><ArrowUpRight size={24} /></Link></div></article>)}</div>
    <div className="more-work"><span className="eyebrow">MORE EXPLORATIONS</span>{otherWork.map(item => <a href={item.url} target="_blank" rel="noopener noreferrer" key={item.title}><span>{item.title}</span><span className="more-category">{item.category}</span><ArrowUpRight size={18} /></a>)}</div>
  </section>;
}