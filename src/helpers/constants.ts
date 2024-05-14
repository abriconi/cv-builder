import { CvType, LanguageLevels, SkillLevels } from "../types";

export const CV_FIELDS = {
  jobPosition: "Job position",
  firstName: "First Name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone number",
  country: "Country",
  city: "City",
  jobTitle: "Job title",
  companyName: "Company name",
  startDate: "Start date",
  endDate: "End date",
  location: "Location",
  description: "Description",
  school: "School",
  degree: "Degree",
  languages: "Language",
  level: "Level",
  social: "Social network",
  link: "Link",
  skill: "Skill",
};

export const LANGUAGE_LEVELS: LanguageLevels = {
  nativeSpeaker: "Native speaker",
  beginner: "A1 - Beginner",
  elementary: "A2 - Elementary",
  intermediate: "B1 - Intermediate",
  upperIntermediate: "B2 - Upper-Intermediate",
  advanced: "C1 - Advanced",
  proficiency: "C2 - Proficiency",
};

export const SKILL_LEVELS: SkillLevels = {
  novice: "novice",
  beginner: "beginner",
  skillful: "skillful",
  experienced: "experienced",
  expert: "expert",
};

export const HEADING = {
  notSpecified: "Not specified",
  currentlyWork: "Currently work here",
};

export enum MESSAGE_TYPE {
  userDataFromParentToIframe = "user-data-to-iframe",
  templateUploaded = "template-uploaded",
  colorsToIframe = "colors-to-iframe",
  colorsToParent = "colors-to-parent",
  userPhotoToIframe = "user-photo-to-iframe",
}

export const defaultUserData: CvType = {
  jobPosition: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  summary: "",
  experience: [],
  education: [],
  languages: [],
  social: [],
  skills: [],
};
