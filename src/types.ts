export interface ExperienceType {
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
}

export interface ExperienceTypeWithId {
  id: string;
  title: string;
  companyName: string;
  startDate: string;
  endDate: string;
  location?: string;
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

export interface EducationTypeWithId {
  id: string;
  school: string;
  degree?: string;
  startDate: string;
  endDate: string;
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

export interface SkillLevels {
  novice: string;
  beginner: string;
  skillful: string;
  experienced: string;
  expert: string;
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
export interface SkillTypeWithId {
  id: string;
  skill: string;
  level: string;
}

export interface SocialType {
  label: string;
  link: string;
}

export interface SocialTypeWithId {
  id: string;
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
  education: EducationTypeWithId[] | [];
  experience: ExperienceTypeWithId[] | [];
  languages: LanguagesTypeWithId[] | [];
  skills: SkillTypeWithId[] | [];
  social: SocialTypeWithId[] | [];
  summary: string;
}

export interface ColorPalette {
  color_name: string;
  primary: string;
  primary_shade: string;
  available_templates: string[];
}
