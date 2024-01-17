export interface ExperienceItemType {
  id: string;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface SkillOption {
  value: string;
  label: string;
  color: string;
}
