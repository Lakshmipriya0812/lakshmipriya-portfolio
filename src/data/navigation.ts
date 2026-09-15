export type SectionId =
  | "home"
  | "about"
  | "Featured Work"
  | "expertise"
  | "experience"
  | "certifications"
  | "academic"
  | "contact";

export const navigation = [
  { id: "home", labelKey: "navigation.home" },
  { id: "about", labelKey: "navigation.about" },
  { id: "projects", labelKey: "navigation.projects" },
  { id: "expertise", labelKey: "navigation.expertise" },
  { id: "experience", labelKey: "navigation.experience" },
  { id: "certifications", labelKey: "navigation.certifications" },
  { id: "academic", labelKey: "navigation.academic" },
  { id: "contact", labelKey: "navigation.contact" },
] as const;
