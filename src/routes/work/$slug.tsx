import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/portfolio";
import { Navigation } from "@/components/portfolio/Navigation";
import { Contact } from "@/components/portfolio/Contact";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = projects.find(item => item.slug === params.slug);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => ({ meta: [
    { title: `${loaderData?.title ?? "Project"} — Asif Yousaf` },
    { name: "description", content: loaderData?.description ?? "An engineering case study by Asif Yousaf." },
    { property: "og:title", content: `${loaderData?.title ?? "Project"} — Asif Yousaf` },
    { property: "og:description", content: loaderData?.description ?? "An engineering case study by Asif Yousaf." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CaseStudy,
});

function CaseStudy() {
  const project = Route.useLoaderData();
  const next = projects[(projects.findIndex(item => item.slug === project.slug) + 1) % projects.length];
  if (!next) return null;
  return <div id="top"><Navigation /><main><article className="case-study"><Link className="case-back" to="/" hash="work"><ArrowLeft size={15} />BACK TO SELECTED WORK</Link><div className="eyebrow text-primary">{project.number} / {project.category}</div><h1 className="case-title">{project.title}</h1><p className="case-intro">{project.description}</p><div className="case-actions">{project.live && <Button asChild variant="studio"><a href={project.live} target="_blank" rel="noopener noreferrer">{project.live.includes("linkedin") ? "Watch demo on LinkedIn" : "Visit live project"} <ArrowUpRight /></a></Button>}{"note" in project && (project as { note?: string }).note && <span className="font-mono text-xs text-muted-foreground border border-border px-3 py-2">{(project as { note?: string }).note}</span>}</div><div className="case-cover"><img src={project.image} alt={project.alt} width="1536" height="768" /></div><div className="case-details"><aside><div className="eyebrow">TECHNOLOGY STACK</div><div className="case-stack">{project.stack.map(tool => <span key={tool}>{tool}</span>)}</div></aside><div><h2>The challenge.</h2><p>{project.problem}</p><h2 className="mt-10">My contribution.</h2><ul>{project.contributions.map(item => <li key={item}>{item}</li>)}</ul><h2 className="mt-10">The connected system.</h2><div className="case-flow">{project.flow.map((item, i) => <div key={item}><span>0{i + 1} / {i === 3 ? "OUTPUT" : "PROCESS"}</span>{item}</div>)}</div></div></div><Link className="case-next" to="/work/$slug" params={{ slug: next.slug }}><span><span className="eyebrow block mb-3">NEXT PROJECT</span>{next.title}</span><ArrowUpRight size={35} /></Link></article><Contact /></main></div>;
}