import { useState } from "react";
import { ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { stages } from "@/lib/portfolio";

export function SystemMap() {
  const [active, setActive] = useState(2);
  const stage = stages[active];
  if (!stage) return null;
  const handleKeys = (event: React.KeyboardEvent<HTMLDivElement>) => {
    let next = active;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (active + 1) % stages.length;
    else if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (active - 1 + stages.length) % stages.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = stages.length - 1;
    else return;
    event.preventDefault(); setActive(next);
    document.getElementById(`stage-${next}`)?.focus();
  };
  return <section id="system" className="system-section section-shell">
    <div className="section-label"><span>03 / THE SYSTEM</span><span>FROM FIRST PRINCIPLES TO PRODUCTION</span></div>
    <div className="section-title-row reveal"><h2>Good products.<br /><span className="text-muted-foreground">Connected thinking.</span></h2><p>Not just what I build.<br />How I bring it all together.</p></div>
    <div className="system-nodes" role="tablist" aria-label="Engineering stages" onKeyDown={handleKeys}>{stages.map((item, index) => <div className="node-wrap" key={item.title}><Button variant="editorial" className={`system-node ${active === index ? "node-selected" : ""}`} role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls="stage-details" id={`stage-${index}`} onClick={() => setActive(index)}><span className="node-number">0{index + 1}</span><span>{item.title}</span><Plus size={16} /></Button>{index < 4 && <ArrowRight className="node-arrow" size={18} />}</div>)}</div>
    <div className="system-detail" id="stage-details" role="tabpanel" aria-labelledby={`stage-${active}`} key={active}><div><span className="eyebrow text-primary">{stage.label}</span><h3>{stage.heading}</h3><p>{stage.description}</p></div><div className="system-evidence"><span className="eyebrow">TOOLS & PRINCIPLES</span><p>{stage.tools}</p><span className="eyebrow">IN PRACTICE</span><p>{stage.example}</p></div></div>
  </section>;
}