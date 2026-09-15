export type CaseStudyKind = "vm" | "synthetic" | "drift" | "database" | "epilogue";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  kind: CaseStudyKind;
  title: string;
  eyebrow: string;
  summary: string;
  problem: string;
  mattered: string;
  contribution: string;
  workflow: string[];
  technologies: string[];
  metrics: CaseStudyMetric[];
}

export const caseStudies: CaseStudy[] = [
{
    id: "vm-creation",
    number: "01",
    kind: "vm",
    title: "VM Creation Automation",
    eyebrow: "ASSETWORKS / HOSTING TEAM",

    summary:
        "Designed and implemented an end-to-end VM provisioning workflow that reduced a days-to-weeks manual process to a streamlined, automated workflow.",

    problem:
        "Previously, creating and preparing a VM required coordination with the IT team and multiple manual dependencies across provisioning, IP allocation, DNS, and configuration. Depending on the environment and requirements, the process could take days or weeks.",

    mattered:
        "The manual process created provisioning delays, required repeated coordination across teams, and increased the risk of configuration gaps before a VM was ready for use.",

    contribution:
        "Designed and implemented the end-to-end VM creation workflow, incorporating team requirements and feedback. Built the automation across VM provisioning, IP allocation, DNS transactions, VM configuration, and environment-specific workflows, and validated the complete process for production readiness.",

    workflow: [
    "User Request",
    "Policy Validation",
    "Hypervisor & IP",
    "Provision Golden VM",
    "DNS & Configuration",
    "Validation",
    "Ready"
    ],

    technologies: [
        "ManageIQ",
        "Embedded Ansible",
        "Windows VM",
        "OP ManageCentral",
        "IP allocation",
        "DNS transactions",
        "PROD / TEST / DEV"
    ],

    metrics: [
        {
        value: "7 days",
        label: "previous provisioning time"
        },
        {
        value: "~14 min",
        label: "automated VM provisioning time"
        },
        {
        value: "7+",
        label: "workflow steps automated"
        },
        {
        value: "15+ VMs",
        label: "provisioned through the workflow"
        }
    ]
    },
    {
    id: "synthetic-testing",
    number: "02",
    kind: "synthetic",
    title: "Synthetic & Sanity Testing",
    eyebrow: "ASSETWORKS / PRODUCTION VALIDATION",

    summary:
        "Scaled automated production validation from 3 customers to 175+ environments, making post-change verification repeatable and configuration-driven.",

    problem:
        "Production systems require reliable validation after deployments, infrastructure changes, upgrades, and maintenance windows. Manual checks made it difficult to validate large numbers of customer environments consistently and increased the time required to confirm that systems were ready.",

    mattered:
        "Fast, repeatable validation helps identify issues before a maintenance window closes. The checks verify critical application behavior including application access, authentication, database connectivity, and other customer-specific success signals.",

    contribution:
        "Designed and executed synthetic and sanity testing using Azure DevOps pipelines, C#, and Playwright. Scaled the validation framework from 3 customers to 175+ environments, introduced configuration-driven customer onboarding, and implemented grouped maintenance runs to execute customer-specific sanity checks efficiently.",

    workflow: [
        "Deployment / Change",
        "Trigger Validation",
        "Synthetic Checks",
        "Critical Workflow Validation",
        "Customer Sanity Checks",
        "Failure Detection",
        "Issue Visibility"
    ],

    technologies: [
        "Azure DevOps",
        "YAML Pipelines",
        "C#",
        "Playwright",
        "Login Validation",
        "Database Checks",
        "Grouped Maintenance Runs",
        "Automated Version Updates"
    ],

    metrics: [
        {
        value: "3 → 175+",
        label: "customer environments supported"
        },
        {
        value: "175+",
        label: "environments covered by validation"
        },
        {
        value: "5",
        label: "customer synthetic checks"
        },
        {
        value: "175",
        label: "customer sanity checks via grouped runs"
        }
    ]
    },
    {
    id: "configuration-drift",
    number: "03",
    kind: "drift",
    title: "Configuration Drift Detection",
    eyebrow: "ASSETWORKS / CONFIGURATION VISIBILITY",

    summary:
        "Detecting configuration drift by hashing, parsing, and comparing server state across distributed Windows environments.",

    problem:
        "When multiple servers run similar workloads, configuration can gradually diverge. A server may have a different configuration file, an outdated value, or a missing update. Manually inspecting files across servers does not scale and makes it difficult to identify the exact source of drift.",

    mattered:
        "The hosting team needed a reliable comparison engine that could evaluate configuration state across shared and dedicated customer environments and make differences immediately visible.",

    contribution:
        "Implemented configuration drift detection across WinRM-connected Windows servers using Python, PowerShell, Shell, and JavaScript. Built the workflow around configuration hashing, parsing, and comparison rather than manual file-by-file inspection. Used a fan-in/fan-out processing model to collect configuration state from multiple servers, compare results against the expected state, classify differences, and surface customer and environment-level issues through dashboards.",

    workflow: [
        "Server Fleet",
        "Fan-Out",
        "WinRM Collection",
        "Hash & Parse",
        "Configuration Comparison",
        "Fan-In & Drift Detection",
        "Dashboard Visibility"
    ],

    technologies: [
        "Python",
        "PowerShell",
        "Shell",
        "JavaScript",
        "WinRM",
        "Windows Server",
        "Hash-based comparison",
        "Configuration parsing",
        "Fan-in / Fan-out",
        "Customer dashboards"
    ],

    metrics: [
        { value: "Hash-based", label: "configuration comparison" },
        { value: "Fan-in / Fan-out", label: "distributed processing model" },
        { value: "Prod + Test", label: "environments supported" },
        { value: "Shared + Dedicated", label: "customer infrastructure supported" }
    ]
    },
    {
    id: "database-validation",
    number: "04",
    kind: "database",
    title: "Primary-to-Reporting Database Workflow Validation",
    eyebrow: "ASSETWORKS / DATA RELIABILITY",

    summary:
        "Testing the reporting path while protecting the primary production data layer.",

    problem:
        "Customer-facing queries should not directly access the primary production database. A reporting database provides an isolated surface, but the synchronization path must be reliable and verifiable.",

    mattered:
        "Customers need accurate and timely reporting data while the primary production database remains protected from direct customer-facing access.",

    contribution:
        "Designed and executed end-to-end testing for the automated synchronization workflow. Validated order creation, primary writes, workflow execution, data transfer, reporting updates, consistency, customer access, failure scenarios, and production isolation.",

    workflow: [
        "Customer Order",
        "Primary Database",
        "Sync Workflow",
        "Reporting Database",
        "Data Consistency",
        "Customer Query",
        "Failure Validation"
    ],

    technologies: [
        "Primary Database",
        "Reporting Database",
        "Order Workflow",
        "Data Consistency",
        "Customer-Facing Access",
        "Failure Validation"
    ],

    metrics: [
    { value: "8", label: "end-to-end workflow stages validated" },
    { value: "50+", label: "test scenarios executed" },
    { value: "End-to-End", label: "data flow validation" },
    { value: "45", label: "failure paths validated" }
    ]
    },
{
    id: "epilogue-platform-engineering",
    number: "05",
    kind: "epilogue",
    title: "Cloud Infrastructure, Kubernetes & Observability",
    eyebrow: "EPILOGUE SYSTEMS / DEVOPS ENGINEERING INTERN",

    summary:
        "Engineered cloud-native infrastructure, Kubernetes workloads, production observability, and log-driven anomaly detection across AWS.",

    problem:
        "Production workloads required reliable container orchestration, secure network communication, scalable deployments, and actionable observability while processing large volumes of application logs.",

    mattered:
        "The platform needed zero-downtime releases, predictable scaling, secure production traffic flow, efficient log processing, and better visibility into infrastructure health and operating costs.",

    contribution:
        "Orchestrated containerized workloads on Kubernetes (EKS), optimized Docker images, configured NGINX Ingress and AWS ALB, implemented HPA and rolling deployments, administered Linux EC2 nodes, enforced VPC security controls, engineered Apache Airflow ETL and ML pipelines for millions of logs per day, integrated S3, PostgreSQL, Grafana, and CloudWatch, and optimized AWS observability costs.",

    workflow: [
        "Containerize",
        "Deploy to EKS",
        "Route & Scale",
        "Process Logs",
        "Detect Anomalies",
        "Observe & Alert",
        "Optimize Costs"
    ],

    technologies: [
        "AWS EKS",
        "Docker",
        "Kubernetes",
        "NGINX Ingress",
        "AWS ALB",
        "HPA",
        "EC2 / Linux",
        "VPC",
        "Apache Airflow",
        "AWS S3",
        "PostgreSQL",
        "Grafana",
        "CloudWatch"
    ],

    metrics: [
        { value: "35%", label: "Docker image size reduction" },
        { value: "40%", label: "improvement in scaling" },
        { value: "45%", label: "production downtime reduction" },
        { value: "$700 → $450", label: "monthly AWS cost reduced" }
    ]
}
];
