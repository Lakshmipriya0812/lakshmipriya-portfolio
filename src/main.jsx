import React, {useState} from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Download, Terminal, Cloud,
  Container, Workflow, Activity, ShieldCheck, Server, ChevronRight,
  ExternalLink, Menu, X
} from "lucide-react";
import "./styles.css";

const skills = [
  ["CI/CD & Source Control", "Azure DevOps · Playwright · GitHub Actions · Jenkins · ArgoCD", Workflow],
  ["Infrastructure Automation", "Ansible · ManageIQ · Azure Key Vault · Terraform · VMware", Server],
  ["Cloud", "Azure · AWS · EKS · EC2 · S3 · RDS · IAM · VPC · CloudWatch", Cloud],
  ["Containers", "Docker · Kubernetes · EKS · Minikube · NGINX Ingress", Container],
  ["Security & Networking", "Key Vault · Trivy · Secrets · IAM · VPC · NAT · NGINX", ShieldCheck],
  ["Programming & Scripting", "Python · Bash · C# · Playwright · JSON · YAML", Terminal],
  ["Frontend Frameworks", "React · TypeScript · Angular", Workflow],
  ["Collaboration & OS", "Agile/Scrum · Jira · Confluence · Linux · Ubuntu", Activity]
];

const expertise = [
  {title:"Cloud & Infrastructure", text:"Designing and provisioning repeatable cloud environments and hosted systems.", tools:["Azure","AWS","Terraform","Ansible","ManageIQ","VMware","Azure Key Vault"]},
  {title:"CI/CD & Containers", text:"Automating testing, delivery, container builds, and deployment workflows.", tools:["Azure DevOps","GitHub Actions","Jenkins","ArgoCD","Docker","Kubernetes","Playwright"]},
  {title:"Systems & Observability", text:"Improving production visibility, troubleshooting, alerting, and incident response.", tools:["Linux","Ubuntu","Grafana","Apache Airflow","Postgres","CloudWatch","NGINX"]},
  {title:"Application & AI Engineering", text:"Building maintainable full-stack products, APIs, and AI-powered user experiences.", tools:["React","TypeScript","Angular","FastAPI","Python","C#","LLM / RAG"]}
];

const projects = [
  {
    number:"01",
    title:"AI Product Discovery Assistant",
    label:"AI / FULL-STACK APPLICATION",
    tags:["FastAPI","LLM","Embeddings","Docker Compose","CI/CD"],
    description:"Real-time, LLM-powered product discovery assistant built for search relevance, ranking, and user-interaction workloads at scale.",
    bullets:[
      "Handled 100+ concurrent queries with ranking logic and search relevance tuning.",
      "Designed RESTful FastAPI services for search, ranking, and user interactions.",
      "Achieved 85% backend test coverage with automated CI/CD.",
      "Containerized the full stack with Docker Compose for production-ready deployment."
    ]
  },
  {
    number:"02",
    title:"AI-Personal Portfolio",
    label:"AI / FULL-STACK DEPLOYMENT",
    tags:["React","Node.js","Embeddings","Vector Retrieval","Docker"],
    description:"Full-stack portfolio with an LLM-powered Q&A layer using embeddings and vector retrieval for personalized, sub-second responses.",
    bullets:[
      "Built an AI-driven navigation, recommendation, and content discovery experience.",
      "Hardened the platform with API authentication and rate limiting.",
      "Added detailed usage and performance logging for production visibility.",
      "Increased user engagement by approximately 60%."
    ]
  },
  {
    number:"03",
    title:"Sonic Touch - Voice-Enabled E-Commerce",
    label:"AI / CONTAINERIZED APPLICATION",
    tags:["React","Tailwind CSS","Node.js","MongoDB","Rasa","Docker Compose"],
    description:"AI-powered e-commerce platform enabling hands-free navigation through a React, Node.js, MongoDB, and Rasa application stack.",
    bullets:[
      "Built backend services for product data, user sessions, and voice interactions.",
      "Integrated Rasa conversational AI with clean NLP intents and actions.",
      "Containerized the application with Docker Compose for scalable deployment.",
      "Cut deployment time by 70% through containerized delivery."
    ]
  }
];

const experience = [
  {
    role:"DevOps Intern",
    company:"AssetWorks",
    period:"May 2026 - Present",
    location:"Hosting Team",
    text:"Working directly with production environments across synthetic testing, configuration management, provisioning, and hosted-environment visibility.",
    chips:["Azure DevOps","C#","Playwright","ManageIQ","Ansible","Azure Key Vault"]
  },
  {
    role:"DevOps Intern",
    company:"Epilogue Systems",
    period:"Sep 2025 - Jan 2026",
    location:"Cloud Engineering",
    text:"Containerized and deployed cloud-native applications on Kubernetes and provisioned AWS infrastructure with Terraform. Architected an Apache Airflow ML anomaly-detection pipeline that cut data processing time by 40% and built Grafana dashboards that improved incident response efficiency by 35%.",
    chips:["Kubernetes EKS","Terraform","Airflow","Grafana","Postgres","Linux"]
  },
  {
    role:"Software Engineer Intern",
    company:"Techavidity",
    period:"May 2025 - Aug 2025",
    location:"Software Engineering",
    text:"Developed a full-stack SaaS application with React and TypeScript, built automated testing and CI/CD pipelines, and integrated Neo4j GDS algorithms to reduce patient referral processing time by 25%.",
    chips:["React","TypeScript","Neo4j GDS","CI/CD","Testing"]
  }
];

function App(){
  const [menu,setMenu] = useState(false);
  const [open,setOpen] = useState(null);
  const scroll = id => { document.getElementById(id)?.scrollIntoView({behavior:"smooth"}); setMenu(false); };

  return <div className="app">
    <div className="noise" />
    <header className="nav">
      <button className="brand" type="button" onClick={()=>scroll("top")} aria-label="Back to top">
        <span className="prompt">~/</span>lakshmipriya
      </button>
      <button className="mobile-menu" type="button" onClick={()=>setMenu(!menu)} aria-label={menu ? "Close navigation" : "Open navigation"} aria-expanded={menu} aria-controls="site-navigation">{menu?<X/>:<Menu/>}</button>
      <nav id="site-navigation" className={menu?"navlinks open":"navlinks"}>
        {["work","experience","proof","stack","about"].map(x=><button key={x} onClick={()=>scroll(x)}>{x}</button>)}
        <a href="https://github.com/Lakshmipriya0812" target="_blank" rel="noreferrer">github <ArrowUpRight size={14}/></a>
        <a className="resume" href="/resume.pdf" target="_blank" rel="noreferrer"><Download size={14}/> resume</a>
      </nav>
    </header>

    <main id="top">
      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> OPEN TO DEVOPS / SRE / PLATFORM ENGINEERING</div>
          <h1>Lakshmipriya<br/><em>RajeshKanna.</em></h1>
          <p className="lede">
            Full-stack software developer with 1.2+ years of hands-on internship experience
            across application development, DevOps, and cloud infrastructure.
          </p>
          <div className="contact-line"><a href="tel:+12672612987">267-261-2987</a><span>·</span><a href="mailto:rs.lakshmipriya08@gmail.com">rs.lakshmipriya08@gmail.com</a></div>
          <div className="actions">
            <button className="primary" onClick={()=>scroll("work")}>Explore my work <ChevronRight size={17}/></button>
            <a className="secondary" href="https://www.linkedin.com/in/lakshmipriya-r/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
          </div>
          <div className="proof">
            <span><b>1.2+</b> years experience</span><span><b>MS</b> Software Engineering</span><span><b>PA</b> open to relocation</span>
          </div>
        </div>

        <div className="profile-panel">
          <div className="profile-monogram">LR</div>
          <div className="profile-status"><span className="pulse"></span> OPEN TO RELOCATION</div>
          <h2>Full-Stack Developer<br/><span>DevOps & Cloud</span></h2>
          <p>Currently working on AssetWorks' hosting team with production environments, automation, provisioning, and platform visibility.</p>
          <div className="profile-location">Philadelphia, Pennsylvania · United States</div>
          <div className="profile-links"><a href="mailto:rs.lakshmipriya08@gmail.com">Email me <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/lakshmipriya-r/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14}/></a></div>
        </div>
      </section>

      <section className="ticker"><div>DEVOPS</div><div>CLOUD INFRASTRUCTURE</div><div>CI/CD</div><div>OBSERVABILITY</div><div>AUTOMATION</div><div>PLATFORM ENGINEERING</div></section>

      <section id="proof" className="proof-section section">
        <div className="proof-intro"><span className="kicker">01 / IMPACT AT A GLANCE</span><h2>Systems measured<br/>by <em>outcomes.</em></h2></div>
        <div className="metric-grid">
          <div className="metric"><strong>175+</strong><span>hosted customer environments covered by automated sanity checks</span></div>
          <div className="metric"><strong>40%</strong><span>faster data processing through an Airflow ML pipeline</span></div>
          <div className="metric"><strong>35%</strong><span>better incident response efficiency with Grafana visibility</span></div>
          <div className="metric"><strong>85%</strong><span>backend test coverage on an AI product assistant</span></div>
        </div>
      </section>

      <section id="work" className="section work">
        <div className="section-head">
          <div><span className="kicker">02 / SELECTED WORK</span><h2>Engineering over aesthetics.</h2></div>
          <p>Full-stack applications and platform projects spanning AI, cloud infrastructure, automation, testing, and reliable delivery.</p>
        </div>
        <div className="projects">
          {projects.map((p,i)=><article className="project" key={p.number}>
            <div className="project-top"><span>{p.number}</span><span>{p.label}</span></div>
            <h3>{p.title}</h3>
            <div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div>
            <p>{p.description}</p>
            <button className="details" onClick={()=>setOpen(open===i?null:i)}>Architecture notes <ChevronRight size={15} className={open===i?"rot":""}/></button>
            {open===i && <ul className="bullets">{p.bullets.map(b=><li key={b}>{b}</li>)}</ul>}
          </article>)}
        </div>
      </section>

      <section id="experience" className="section experience">
        <div className="section-head"><div><span className="kicker">03 / EXPERIENCE</span><h2>Operating mindset.</h2></div>
        <p>Hands-on work across production hosting, cloud-native deployments, test automation, observability, and full-stack product engineering.</p></div>
        <div className="timeline">
          {experience.map((e,i)=><div className="timeline-item" key={e.role}>
            <div className="timeline-marker">{String(i+1).padStart(2,"0")}</div>
            <div className="timeline-main">
              <div className="roleline"><h3>{e.role}</h3><span>{e.period}</span></div>
              <div className="company">{e.company} · {e.location}</div>
              <p>{e.text}</p>
              <div className="tags">{e.chips.map(c=><span key={c}>{c}</span>)}</div>
            </div>
          </div>)}
        </div>
      </section>

      <section id="stack" className="section stack">
        <div className="section-head"><div><span className="kicker">04 / ENGINEERING STACK</span><h2>The toolbox.</h2></div>
        <p>A practical stack across cloud infrastructure, delivery automation, application development, security, and production operations.</p></div>
        <div className="expertise-grid">{expertise.map((group,index)=><article className="expertise-card" key={group.title}><div className="expertise-number">0{index+1}</div><h3>{group.title}</h3><p>{group.text}</p><div className="tags">{group.tools.map(tool=><span key={tool}>{tool}</span>)}</div></article>)}</div>
        <div className="platform-note"><ShieldCheck/><div><b>Professional focus</b><p>Full-stack development, DevOps automation, production hosting, cloud infrastructure, AI-powered features, and tested, maintainable systems.</p></div></div>
      </section>

      <section id="about" className="section about">
        <div className="about-card">
          <div><span className="kicker">05 / ABOUT</span><h2>Software developer<br/>with a <em>systems</em> mindset.</h2></div>
          <div>
            <p>I am a full-stack software developer with experience building React and TypeScript applications, RESTful Web APIs, AI/LLM-powered features, and production-oriented DevOps workflows.</p>
            <p>Currently on AssetWorks' hosting team, I work directly with production environments and enjoy solving the operational problems behind the application: automation, provisioning, testing, observability, and reliable delivery.</p>
            <div className="edu"><span>MS Software Engineering</span><b>Drexel University</b><span>Philadelphia, PA · 2023 - 2025</span></div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-grid">
          <div><span className="kicker">LET'S BUILD</span><h2>Reliable systems<br/>start with <em>curiosity.</em></h2></div>
          <div className="cta-side"><p>Looking for DevOps, SRE and Platform Engineering opportunities where I can automate, learn fast and help operate systems that matter.</p>
            <div className="actions"><a className="primary" href="https://www.linkedin.com/in/lakshmipriya-r/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={17}/></a><a className="secondary" href="https://github.com/Lakshmipriya0812" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a></div>
          </div>
        </div>
      </section>
    </main>

    <footer><span>© 2026 Lakshmipriya R</span><span>DevOps · Cloud · Reliability</span><a href="#top">back to top ↑</a></footer>
  </div>
}

createRoot(document.getElementById("root")).render(<App/>);