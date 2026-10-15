import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio";

export function Navigation({ home = false }: { home?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      document.getElementById("navigation-toggle")?.focus();
    };
    if (open) window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return <header className={scrolled ? "site-header scrolled" : "site-header"}>
    <Link to="/" className="wordmark" aria-label="Asif Yousaf home">AY<span className="wordmark-dot">.</span><span className="wordmark-caption">ASIF YOUSAF<br />DEVELOPER & ENGINEER</span></Link>
    <nav id="main-navigation" className={open ? "main-nav nav-open" : "main-nav"} aria-label="Main navigation">
      {home ? <><a href="#work" onClick={() => setOpen(false)}>Work <span>01</span></a><a href="#about" onClick={() => setOpen(false)}>About <span>02</span></a><a href="#system" onClick={() => setOpen(false)}>The system <span>03</span></a></> : <Link to="/" hash="work" onClick={() => setOpen(false)}>Selected work <span>01</span></Link>}
      <a className="nav-resume" href={profile.resume} download="Asif-CV.pdf" target="_blank" rel="noopener noreferrer">Résumé <ArrowUpRight size={14} /></a>
      <a className="nav-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={15} /></a>
    </nav>
    <Button id="navigation-toggle" variant="ghost" size="icon" className="menu-toggle" aria-controls="main-navigation" aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</Button>
  </header>;
}