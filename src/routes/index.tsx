import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/portfolio/Navigation";
import { Installation } from "@/components/portfolio/Installation";
import { SelectedWork } from "@/components/portfolio/SelectedWork";
import { SystemMap } from "@/components/portfolio/SystemMap";
import { Contact } from "@/components/portfolio/Contact";
import { profile } from "@/lib/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Asif Yousaf — Creative Developer & Full-Stack Engineer" },
    { name: "description", content: "Asif Yousaf builds real web, mobile and AI products. Explore selected projects and the engineering behind them." },
    { property: "og:title", content: "Asif Yousaf — Living Digital Systems" },
    { property: "og:description", content: "Creative development, full-stack engineering and applied AI. Ideas engineered into working products." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const skillCategories = [
  {
    code: "01",
    tag: "MOBILE & WEB",
    title: "Frontend & Mobile Ecosystem",
    skills: [
      "React Native",
      "Expo SDK & Router",
      "TypeScript",
      "React",
      "Next.js",
      "Shopify Skia (GPU)",
      "NativeWind / Tailwind",
      "Kotlin (Android)",
      "Reanimated",
    ],
  },
  {
    code: "02",
    tag: "BACKEND & APIS",
    title: "Backend & Systems Architecture",
    skills: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "WebSockets",
      "GraphQL",
      "Edge Functions",
    ],
  },
  {
    code: "03",
    tag: "DATA & CLOUD",
    title: "Data, Cloud & Security",
    skills: [
      "PostgreSQL",
      "Supabase & RLS",
      "MongoDB",
      "Firebase",
      "Docker",
      "Git / GitHub Actions",
      "In-App Purchases (IAP)",
      "SecureStore / JWT",
    ],
  },
  {
    code: "04",
    tag: "AI & INTELLIGENCE",
    title: "Applied AI & LLM Systems",
    skills: [
      "Google Gemini API",
      "LangChain",
      "RAG Architectures",
      "Vector Search (FAISS)",
      "Context Embeddings",
      "Prompt Engineering",
      "Intelligent Chatbots",
    ],
  },
];

function Index() {
  return <div id="top"><Navigation home /><main>
    <section className="hero" aria-labelledby="hero-name">
      <div className="hero-topline"><span><i className="status-square" />INDEPENDENT THINKING. CONNECTED SYSTEMS.</span><span>BASED IN DUBAI, UAE / 25.2048° N, 55.2708° E</span></div>
      <h1 className="hero-title" id="hero-name"><span className="name-line">ASIF <span className="name-cross" aria-hidden="true">✳</span></span><span className="surname outline-name">YOUSAF</span></h1>
      <Installation />
      <div className="hero-subtitle"><p><strong>Full-Stack Developer.</strong><br />Engineering ideas into real products.<br />Across web, mobile & applied AI.</p><div className="hero-actions"><Button asChild variant="studio"><a href="#work">Explore selected work <ArrowUpRight /></a></Button><a className="text-action" href={`mailto:${profile.email}`}>Get in touch <ArrowUpRight size={15} /></a></div></div>
      <div className="scene-annotation"><span>SYSTEM_001 / INTERCONNECTED<br />IDEA → FORM → FUNCTION</span></div>
      <div className="hero-bottom"><a href="#work"><ArrowDown size={15} />SCROLL TO EXPLORE</a><span className="hero-note">CREATIVE BY INSTINCT.<br />ENGINEERED WITH INTENT.</span></div>
    </section>
    <div className="discipline-strip"><span>CREATIVE DEVELOPMENT</span><span>+</span><span>FULL-STACK ENGINEERING</span><span>+</span><span>APPLIED AI</span><span>↗</span><span>IDEAS → REALITY</span></div>
    <SelectedWork />
    <section id="about" className="about-section section-shell">
      <div className="section-label"><span>02 / BEHIND THE SYSTEM</span><span>THE PERSON. THE PRACTICE.</span></div>
      <div className="about-content">
        <div className="about-portrait reveal">
          <img src="/images/profile.jpg" alt="Asif Yousaf" width="400" height="400" loading="lazy" />
          <div className="portrait-caption"><span>ASIF YOUSAF</span><span>DUBAI, UAE ↗</span></div>
        </div>
        <div className="about-text reveal">
          <h2>A creative mind.<br />An engineering<br /><span className="text-primary">way of thinking.</span></h2>
          <p>I’m Asif, a full-stack developer building web, mobile and AI-integrated applications. I connect carefully considered interfaces to the systems that make them work.</p>
          <p>From high-performance cross-platform marketplaces with GPU vector visualizers to intelligent customer support assistants and commercial fleet booking platforms, my focus is practical: make complex things useful, and bring them all the way to production.</p>
          <div className="about-capabilities">
            {skillCategories.map(cat => (
              <div key={cat.title} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-title">{cat.title}</span>
                  <span className="skill-group-code">{cat.code} / {cat.tag}</span>
                </div>
                <ul className="skill-pills" aria-label={cat.title}>
                  {cat.skills.map(s => <li key={s} className="skill-pill">{s}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="about-credentials">
            <div className="credentials-list">
              <div className="credential-card">
                <span className="credential-badge">EDUCATION</span>
                <div className="credential-body">
                  <strong>BSc (Hons) Creative Computing</strong>
                  <span>Bath Spa University · Dubai, UAE</span>
                </div>
              </div>
              <div className="credential-card">
                <span className="credential-badge">LOCATION</span>
                <div className="credential-body">
                  <strong>Dubai, United Arab Emirates</strong>
                  <span>Available for Full-Stack & Mobile Roles</span>
                </div>
              </div>
            </div>
            <a className="resume-download-btn" href="/Asif-CV.pdf" target="_blank" rel="noopener noreferrer">
              Download Full Résumé / CV <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
    <SystemMap /><Contact />
  </main></div>;
}
