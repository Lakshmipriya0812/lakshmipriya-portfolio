export type SectionId =
  | "home"
  | "projects"
  | "expertise"
  | "experience"
  | "qualifications"
  | "contact";

export const navigation = [
  { id: "home", labelKey: "navigation.home" },
  { id: "projects", labelKey: "navigation.projects" },
  { id: "expertise", labelKey: "navigation.expertise" },
  { id: "experience", labelKey: "navigation.experience" },
  { id: "qualifications", labelKey: "navigation.qualifications" },
  { id: "contact", labelKey: "navigation.contact" },
] as const;
