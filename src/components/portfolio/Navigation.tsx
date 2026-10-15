import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <Link to="/" className="wordmark" aria-label="Asif Yousaf home">AY<span className="wordmark-dot">.</span><span className="wordmark-caption">ASIF YOUSAF<br />DEVELOPER & ENGINEER</span></Link>
    <nav className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
      {home ? <><a href="#work" onClick={() => setOpen(false)}>Work <span>01</span></a><a href="#about" onClick={() => setOpen(false)}>About <span>02</span></a><a href="#system" onClick={() => setOpen(false)}>The system <span>03</span></a></> : <Link to="/" hash="work">Selected work <span>01</span></Link>}
      <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15} /></a>
    </nav>
    <Button variant="ghost" size="icon" className="menu-toggle" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}