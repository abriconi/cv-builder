export interface ExperienceType {
  title: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  isCurrentWork?: boolean;
  location: string;
  description?: string;
}

export interface EducationType {
  school: string;
  degree: string;
  startDate: string;
  endDate?: string;
  isCurrentStudy?: boolean;
  location: string;
  description?: string;
}

export interface LanguageLevels {
  nativeSpeaker: string;
  beginner: string;
  elementary: string;
  intermediate: string;
  upperIntermediate: string;
  advanced: string;
  proficiency: string;
}

export interface SkillType {
  skill: string;
  level: string;
}

export interface LanguagesType {
  language: string;
  level: string;
}

export interface SocialType {
  label: string;
  link: string;
}

export interface CvType {
  jobPosition?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  email?: string;
  city?: string;
  country?: string;
  education: EducationType[] | [];
  experience: ExperienceType[] | [];
  languages: LanguagesType[] | [];
  skills: SkillType[] | [];
  social: SocialType[] | [];
  summary?: string;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface TemplateType {
  name: string;
  route: string;
  imgURL?: string;
}
