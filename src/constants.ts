import { ExperienceItemType, SelectOptions } from "./types";

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
};

export const LANGUAGE_LEVELS: SelectOptions[] = [
  { value: "native", label: "Native speaker" },
  { value: "a1", label: "A1 - Beginner" },
  { value: "a2", label: "A2 - Elementary" },
  { value: "b1", label: "B1 - Intermediate" },
  { value: "b2", label: "B2 - Upper-Intermediate" },
  { value: "c1", label: "C1 - Advanced" },
  { value: "c2", label: "C2 - Proficiency" },
];
