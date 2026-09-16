export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  taglineKey: string;
  technologies: string[];
  usedInKey: string;
  impactValueKey: string;
  impactLabelKey: string;
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "infrastructure",
    titleKey: "expertise.categories.infrastructure.title",
    taglineKey: "expertise.categories.infrastructure.tagline",
    technologies: [
      "AWS",
      "EKS",
      "EC2",
      "S3",
      "RDS",
      "VPC",
      "IAM",
      "CloudWatch",
      "Terraform",
      "VMware",
      "Windows Server",
      "Azure Key Vault",
    ],
    usedInKey: "expertise.categories.infrastructure.usedIn",
    impactValueKey: "expertise.categories.infrastructure.impactValue",
    impactLabelKey: "expertise.categories.infrastructure.impactLabel",
  },
  {
    id: "automation",
    titleKey: "expertise.categories.automation.title",
    taglineKey: "expertise.categories.automation.tagline",
    technologies: [
      "Ansible",
      "ManageIQ",
      "Python",
      "PowerShell",
      "Bash / Shell",
      "JavaScript",
      "IP allocation",
      "DNS transactions",
    ],
    usedInKey: "expertise.categories.automation.usedIn",
    impactValueKey: "expertise.categories.automation.impactValue",
    impactLabelKey: "expertise.categories.automation.impactLabel",
  },
  {
    id: "delivery",
    titleKey: "expertise.categories.delivery.title",
    taglineKey: "expertise.categories.delivery.tagline",
    technologies: [
      "Azure DevOps",
      "YAML Pipelines",
      "C#",
      "Playwright",
      "GitHub Actions",
      "Jenkins",
      "ArgoCD (GitOps)",
      "Docker",
      "Docker Compose",
      "CI/CD",
    ],
    usedInKey: "expertise.categories.delivery.usedIn",
    impactValueKey: "expertise.categories.delivery.impactValue",
    impactLabelKey: "expertise.categories.delivery.impactLabel",
  },
  {
    id: "observability",
    titleKey: "expertise.categories.observability.title",
    taglineKey: "expertise.categories.observability.tagline",
    technologies: [
      "Grafana",
      "CloudWatch",
      "Apache Airflow",
      "NGINX",
      "PostgreSQL",
      "Linux",
      "WinRM",
      "Trivy",
      "Configuration parsing",
    ],
    usedInKey: "expertise.categories.observability.usedIn",
    impactValueKey: "expertise.categories.observability.impactValue",
    impactLabelKey: "expertise.categories.observability.impactLabel",
  },
  {
    id: "software",
    titleKey: "expertise.categories.software.title",
    taglineKey: "expertise.categories.software.tagline",
    technologies: [
      "Python",
      "C#",
      "TypeScript",
      "JavaScript",
      "React",
      "Angular",
      "FastAPI",
      "REST APIs",
      "Neo4j",
    ],
    usedInKey: "expertise.categories.software.usedIn",
    impactValueKey: "expertise.categories.software.impactValue",
    impactLabelKey: "expertise.categories.software.impactLabel",
  },
];
