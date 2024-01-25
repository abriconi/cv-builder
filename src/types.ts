export interface ExperienceType {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface EducationType {
  school: string;
  degree: string;
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

export interface LanguagesType {
  language: string;
  level: string;
}
export interface LanguagesTypeWithId {
  id: string;
  language: string;
  level: string;
}
export interface SkillType {
  skill: string;
  level: string;
}

export interface SocialType {
  label: string;
  link: string;
}

export interface CvType {
  jobPosition: string;
  firstName: string;
  lastName: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  dateOfBirth: string;
  placeOfBirth: string;
  nationality: string;
  education: EducationType[] | [];
  experience: ExperienceType[] | [];
  languages: LanguagesType[] | [];
  skills: SkillType[] | [];
  social: SocialType[] | [];
  summary: string;
}

export const ItemTypes = {
  education: "education",
  experience: "experience",
  languages: "languages",
  skills: "skills",
  social: "social",
};
