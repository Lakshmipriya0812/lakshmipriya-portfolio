export interface ExperienceItem {
  id: string;
  company: string;
  titleKey: string;
  dateKey: string;
  descriptionKey: string;
  tags?: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    id: "assetworks",
    company: "AssetWorks",
    titleKey: "experience.items.assetworks.title",
    dateKey: "experience.items.assetworks.dates",
    descriptionKey: "experience.items.assetworks.description",
    tags: ["Azure DevOps", "C#", "Playwright", "ManageIQ", "Ansible", "Azure Key Vault"],
  },
  {
    id: "epilogue",
    company: "Epilogue Systems",
    titleKey: "experience.items.epilogue.title",
    dateKey: "experience.items.epilogue.dates",
    descriptionKey: "experience.items.epilogue.description",
    tags: ["Kubernetes EKS", "Terraform", "Airflow", "Grafana", "Postgres", "Linux"],
  },
  {
    id: "techavidity",
    company: "Techavidity",
    titleKey: "experience.items.techavidity.title",
    dateKey: "experience.items.techavidity.dates",
    descriptionKey: "experience.items.techavidity.description",
    tags: ["React", "TypeScript", "Neo4j GDS", "CI/CD", "Testing"],
  },
];
