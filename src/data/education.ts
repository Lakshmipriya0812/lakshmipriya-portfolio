export interface EducationItem {
  id: string;
  titleKey: string;
  institutionKey: string;
  periodKey: string;
}

export const educationItems: EducationItem[] = [
  {
    id: "master",
    titleKey: "academic.education.items.master.title",
    institutionKey: "academic.education.items.master.institution",
    periodKey: "academic.education.items.master.period",
  },
  {
    id: "bachelor",
    titleKey: "academic.education.items.bachelor.title",
    institutionKey: "academic.education.items.bachelor.institution",
    periodKey: "academic.education.items.bachelor.period",
  },
];
