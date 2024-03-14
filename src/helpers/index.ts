import { SKILL_LEVELS } from "./constants";

export const dateFormatter = (date: string | undefined): string => {
  if (date) {
    const parsedDate = new Date(`${date}-01`);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(parsedDate);
    return formattedDate;
  } else {
    return "";
  }
};

export const determineSkillLevel = (skillLevel: string) =>
  skillLevel === SKILL_LEVELS.novice
    ? "1/5"
    : skillLevel === SKILL_LEVELS.beginner
      ? "2/5"
      : skillLevel === SKILL_LEVELS.skillful
        ? "3/5"
        : skillLevel === SKILL_LEVELS.experienced
          ? "4/5"
          : "5/5";
