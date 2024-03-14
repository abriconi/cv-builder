import { LanguageLevels, SkillLevels, TemplateType } from "../types";
import { Routes } from "./routes";

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

export const [VERTEX, LUMINA, AURORA, ECHO, ZENITH] = ["vertex", "lumina", "aurora", "echo", "zenith"];
export const TEMPLATES: TemplateType[] = [
  {
    name: VERTEX,
    route: Routes.Vertex,
    colors: [
      {
        color_name: "blue",
        primary: "#0000FF",
        primary_shade: "#9999ff",
      },
      {
        color_name: "green",
        primary: "#004000",
        primary_shade: "#99b299",
      },
      {
        color_name: "red",
        primary: "#ff3232",
        primary_shade: "#ffb2b2",
      },
    ],
  },
  {
    name: LUMINA,
    route: Routes.Lumina,
    colors: [
      { color_name: "dark-green", primary: "#133337", primary_shade: "#a0adaf" },
      {
        color_name: "navy-blue",
        primary: "#222F5B",
        primary_shade: "#bcc0cd",
      },
      { color_name: "brown", primary: "#743818", primary_shade: "#d5c3b9" },
      { color_name: "dark-gray", primary: "#2F2F2F", primary_shade: "#c0c0c0" },
    ],
  },
  {
    name: AURORA,
    route: Routes.Aurora,
    colors: [
      { color_name: "tiffany-blue", primary: "#81D2C7", primary_shade: "#d9f1ee" },
      {
        color_name: "french-gray",
        primary: "#b5bad0",
        primary_shade: "#e8eaf0",
      },
      { color_name: "lapis-lazuli", primary: "#a0b3c3", primary_shade: "#e2e8ed" },
    ],
  },
  {
    name: ECHO,
    route: Routes.Echo,
    colors: [
      {
        color_name: "space-cadette",
        primary: "#011f4b",
        primary_shade: "#b2bbc9",
      },
      {
        color_name: "celestial-echo",
        primary: "#35485e",
        primary_shade: "#c2c8ce",
      },
      {
        color_name: "coral-jelly-fish",
        primary: "#12587b",
        primary_shade: "#b7ccd7",
      },
    ],
  },
  {
    name: ZENITH,
    route: Routes.Zenith,
    colors: [
      {
        color_name: "wasteland",
        primary: "#42496A",
        primary_shade: "#ececf0",
      },
      {
        color_name: "obsidian",
        primary: "#5B4965",
        primary_shade: "#bdb6c1",
      },
      {
        color_name: "triadic",
        primary: "#2E293A",
        primary_shade: "#aba9b0",
      },
    ],
  },
];

// Zenith
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
