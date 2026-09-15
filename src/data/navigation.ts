export type SectionId =
  | "home"
  | "about"
  | "projects"
  | "expertise"
  | "experience"
  | "qualifications"
  | "contact";

export const navigation = [
  { id: "home", labelKey: "navigation.home" },
  { id: "about", labelKey: "navigation.about" },
  { id: "projects", labelKey: "navigation.projects" },
  { id: "expertise", labelKey: "navigation.expertise" },
  { id: "experience", labelKey: "navigation.experience" },
  { id: "qualifications", labelKey: "navigation.qualifications" },
  { id: "contact", labelKey: "navigation.contact" },
] as const;
