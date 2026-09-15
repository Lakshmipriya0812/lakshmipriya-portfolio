export interface PortfolioProject {
  id: string;
  translationKey: string;
  owner?: string;
  repoUrl: string;
  technologies: string[];
  images: { src: string; altKey: string; width: number; height: number }[];
}

export const projects: PortfolioProject[] = [
  {
    id: "vm-creation",
    translationKey: "projects.vmCreation",
    owner: "AssetWorks / Hosting Team",
    repoUrl: "",
    technologies: ["ManageIQ", "Embedded Ansible", "Windows VM", "OP ManageCentral", "DNS", "IPAM"],
    images: [],
  },
  {
    id: "ai-product-discovery",
    translationKey: "projects.featured",
    repoUrl: "",
    technologies: ["FastAPI", "LLM", "Embeddings", "Docker Compose", "CI/CD", "REST APIs"],
    images: [],
  },
  {
    id: "ai-personal-portfolio",
    translationKey: "projects.networkLab",
    repoUrl: "",
    technologies: ["React", "TypeScript", "Node.js", "Vector Retrieval", "Authentication", "Rate Limiting"],
    images: [],
  },
  {
    id: "synthetic-sanity-testing",
    translationKey: "projects.syntheticTesting",
    owner: "AssetWorks / Hosting Team",
    repoUrl: "",
    technologies: ["Azure DevOps", "YAML Pipelines", "C#", "Playwright", "Database Checks", "Configuration Automation"],
    images: [],
  },
  {
    id: "configuration-drift",
    translationKey: "projects.configurationDrift",
    owner: "AssetWorks / Hosting Team",
    repoUrl: "",
    technologies: ["WinRM", "Windows Server", "Configuration Checks", "Customer Dashboards", "Drift Detection"],
    images: [],
  },
  {
    id: "database-workflow-validation",
    translationKey: "projects.databaseWorkflow",
    owner: "AssetWorks / Hosting Team",
    repoUrl: "",
    technologies: ["Primary Database", "Reporting Database", "Data Synchronization", "Workflow Validation", "Customer Access"],
    images: [],
  },
];
