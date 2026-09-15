export interface EducationItem {
  id: string;
  titleKey: string;
  institutionKey: string;
  periodKey: string;
}

export const educationItems: EducationItem[] = [
  {
    id: "master",
    titleKey: "qualifications.education.items.master.title",
    institutionKey: "qualifications.education.items.master.institution",
    periodKey: "qualifications.education.items.master.period",
  },
  {
    id: "bachelor",
    titleKey: "qualifications.education.items.bachelor.title",
    institutionKey: "qualifications.education.items.bachelor.institution",
    periodKey: "qualifications.education.items.bachelor.period",
  },
];
