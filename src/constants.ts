import { SelectOption, SkillOption } from "./types";

export const CV_FIELDS = {
  jobPosition: "Job position",
  firstName: "First Name",
  lastName: "Last name",
  email: "Email",
  phone: "Phone number",
  country: "Country",
  city: "City",
  address: "Address",
  postalCode: "Postal code",
  nationality: "Nationality",
  placeOfBirth: "Place Of Birth",
  dateOfBirth: "Date Of Birth",
  summary: "Summary",
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
  socialNet: "Social network",
  link: "Link",
  skill: "Skill",
};

export const LANGUAGE_LEVELS: SelectOption[] = [
  { value: "native", label: "Native speaker" },
  { value: "a1", label: "A1 - Beginner" },
  { value: "a2", label: "A2 - Elementary" },
  { value: "b1", label: "B1 - Intermediate" },
  { value: "b2", label: "B2 - Upper-Intermediate" },
  { value: "c1", label: "C1 - Advanced" },
  { value: "c2", label: "C2 - Proficiency" },
];

export const SKILL_LEVELS: Record<string, SkillOption> = {
  novice: { value: "novice", label: "Novice", color: "red" },
  beginner: { value: "beginner", label: "Beginner", color: "orange" },
  skillful: { value: "skillful", label: "Skillful", color: "yellow" },
  experienced: { value: "experienced", label: "Experienced", color: "blue" },
  expert: { value: "expert", label: "Expert", color: "green" },
};
