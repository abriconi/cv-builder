import { ColorPalette, LanguageLevels, SkillLevels } from "./types";

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
};

export const [VERTEX, LUMINA] = ["vertex", "lumina"];

export const COLOR_PALETTE: ColorPalette[] = [
  {
    color_name: "blue",
    primary: "#0000FF",
    primary_shade: "#9999ff",
    available_templates: [VERTEX, LUMINA],
  },
  {
    color_name: "green",
    primary: "#004000",
    primary_shade: "#99b299",
    available_templates: [VERTEX, LUMINA],
  },
  {
    color_name: "purple",
    primary: "#800080",
    primary_shade: "#cc99cc",
    available_templates: [LUMINA],
  },
  {
    color_name: "red",
    primary: "#ff3232",
    primary_shade: "#ffb2b2",
    available_templates: [VERTEX, LUMINA],
  },
];
// lumina
// Zenith
// Aurora
// Elysian
// Pinnacle
// Nimbus
// Ethereal
// Odyssey
// Phoenix
// Apex
// Infinity
// Vanguard
// Serenity
// Quasar
// Stellar
// Echo
// Catalyst
// Resonance
// Horizon
