export interface CredentialItem {
  id: string;
  name: string;
  provider?: string;
  url?: string;
}

export const certifications: CredentialItem[] = [
  {
    id: "neo4j-graph-data-science",
    name: "Neo4j Graph Data Science Certification",
    provider: "Neo4j GraphAcademy · May 2025",
    url: "https://graphacademy.neo4j.com/u/004789c9-0bd2-4519-bf1e-5f3bd4272802",
  },
  {
    id: "neo4j-certified-professional",
    name: "Neo4j Certified Professional",
    provider: "Neo4j GraphAcademy · May 2025",
    url: "https://graphacademy.neo4j.com/c/29fd89b6-f087-456c-965b-256d6b3d685f",
  },
];
