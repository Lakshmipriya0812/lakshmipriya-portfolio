export interface ExpertiseCategory {
  id: string;
  titleKey: string;
  descriptionKey: string;
  technologies: string[];
}

export const expertiseCategories: ExpertiseCategory[] = [
  {
    id: "cloud",
    titleKey: "expertise.cards.cloud.title",
    descriptionKey: "expertise.cards.cloud.description",
    technologies: [
      "Azure", "AWS", "EKS", "EC2", "S3", "RDS", "IAM", "VPC",
      "CloudWatch", "Terraform", "Ansible", "ManageIQ", "VMware", "Azure Key Vault",
    ],
  },
  {
    id: "cicd",
    titleKey: "expertise.cards.cicd.title",
    descriptionKey: "expertise.cards.cicd.description",
    technologies: [
      "Azure DevOps", "Playwright", "GitHub Actions", "Jenkins", "ArgoCD",
      "Docker", "Docker Compose", "Kubernetes", "EKS", "Minikube", "GitOps",
    ],
  },
  {
    id: "ops",
    titleKey: "expertise.cards.ops.title",
    descriptionKey: "expertise.cards.ops.description",
    technologies: [
      "Linux", "Ubuntu", "Grafana", "Apache Airflow", "Postgres", "CloudWatch",
      "NGINX", "Observability", "Incident response", "Cross-platform troubleshooting",
    ],
  },
  {
    id: "automation",
    titleKey: "expertise.cards.automation.title",
    descriptionKey: "expertise.cards.automation.description",
    technologies: [
      "Python", "Bash / Shell", "C#", "Playwright", "JSON", "YAML", "React",
      "TypeScript", "Angular", "FastAPI", "REST APIs", "LLM / RAG", "Neo4j",
    ],
  },
];
