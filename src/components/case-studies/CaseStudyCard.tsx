import { Check, Cloud, CloudCog, Database, FileCheck2, GitBranch, HardDrive, Network, Server, Settings2, ShieldCheck, Terminal, Workflow } from "lucide-react";
import type { CaseStudy, CaseStudyKind } from "../../data/caseStudies";

const iconByKind: Record<CaseStudyKind, typeof Server> = {
  vm: Server,
  synthetic: ShieldCheck,
  drift: Network,
  database: Database,
  epilogue: CloudCog,
};

const diagramLabels: Record<CaseStudyKind, string> = {
  vm: "Provisioning path",
  synthetic: "Validation path",
  drift: "Drift detection path",
  database: "Data isolation path",
  epilogue: "Cloud platform path",
};

const toolIcon = (tool: string) => {
  const value = tool.toLowerCase();
  if (value.includes("azure") || value.includes("cloud")) return Cloud;
  if (value.includes("ansible") || value.includes("pipeline") || value.includes("workflow")) return Workflow;
  if (value.includes("database") || value.includes("postgres") || value.includes("sql")) return Database;
  if (value.includes("windows") || value.includes("server") || value.includes("vm")) return Server;
  if (value.includes("winrm") || value.includes("network") || value.includes("ip")) return Network;
  if (value.includes("dns") || value.includes("manageiq") || value.includes("managecentral")) return Settings2;
  if (value.includes("config") || value.includes("check") || value.includes("validation")) return FileCheck2;
  if (value.includes("shell") || value.includes("python") || value.includes("c#")) return Terminal;
  if (value.includes("storage") || value.includes("disk")) return HardDrive;
  return ShieldCheck;
};

const Diagram = ({ study }: { study: CaseStudy }) => {
  const Icon = iconByKind[study.kind];
  return (
    <div className="case-diagram" aria-label={diagramLabels[study.kind]}>
      {study.kind === "drift" ? (
        <div className="drift-split">
          <div><span>Shared</span><strong>Customers</strong></div>
          <div><span>Dedicated</span><strong>Customers</strong></div>
        </div>
      ) : null}
      <div className="diagram-track" role="list">
        {study.workflow.map((step, index) => (
          <div className="diagram-stage" key={step} role="listitem">
            <div className="diagram-node">
              <span className="diagram-step">{String(index + 1).padStart(2, "0")}</span>
              <span className="diagram-icon">{index === study.workflow.length - 1 ? <Check size={14} /> : <Icon size={14} />}</span>
              <span className="diagram-label">{step}</span>
            </div>
            {index < study.workflow.length - 1 ? <span className="diagram-arrow" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
      {study.kind === "database" ? (
        <div className="validation-checks">
          {["Data created", "Data transferred", "Data consistent", "Reporting DB updated", "Customer can retrieve"].map((check) => <span key={check}><Check size={13} /> {check}</span>)}
        </div>
      ) : null}
    </div>
  );
};

const VmComparison = () => (
  <div className="vm-comparison" aria-label="VM provisioning before and after comparison">
    <div className="vm-lane vm-lane-before">
      <div className="vm-lane-label"><span>Before</span><strong>Manual process</strong></div>
      <div className="vm-lane-flow"><span>Request VM</span><b>→</b><span>Coordinate with IT</span><b>→</b><span>Provision</span><b>→</b><span>Configure</span><b>→</b><span>Validate</span><b>→</b><span>Hand off</span></div>
    </div>
    <div className="vm-lane vm-lane-after">
      <div className="vm-lane-label"><span>After</span><strong>Automated workflow</strong></div>
      <div className="vm-lane-flow"><span>User request</span><b>→</b><span>One-click automation</span><b>→</b><span>VM provisioned</span><b>→</b><span>Configuration applied</span><b>→</b><span>Validation</span><b>→</b><span>Ready</span></div>
    </div>
  </div>
);

export const CaseStudyCard = ({ study, flagship = false }: { study: CaseStudy; flagship?: boolean }) => (
  <article className={`case-study ${flagship ? "case-study-flagship" : ""}`}>
    <div className="case-study-header">
      <span className="case-number">{study.number}</span>
      <span className="case-eyebrow">{study.eyebrow}</span>
    </div>
    <div className="case-study-title-row">
      <div>
        <h3>{study.title}</h3>
        <p className="case-summary">{study.summary}</p>
      </div>
      <GitBranch className="case-title-icon" size={22} aria-hidden="true" />
    </div>

    <div className="case-study-grid">
      <div className="case-copy">
        <section><h4>Production problem</h4><p>{study.problem}</p></section>
        <section><h4>Why it mattered</h4><p>{study.mattered}</p></section>
        <section><h4>My contribution</h4><p>{study.contribution}</p></section>
      </div>
      <div className="case-visual-column">
        {study.kind === "vm" ? <VmComparison /> : null}
        <Diagram study={study} />
        <div className="case-tools"><h4>Tooling and systems</h4><div>{study.technologies.map((tool) => { const Icon = toolIcon(tool); return <span key={tool}><Icon size={14} aria-hidden="true" />{tool}</span>; })}</div></div>
      </div>
    </div>

    <div className="case-metrics"><p>Production impact</p><div>{study.metrics.map((metric) => <div className="case-metric" key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}</div></div>
  </article>
);
