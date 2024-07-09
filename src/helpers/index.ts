import { CvType, TemplateType } from "../types";
import { IMG_PATH } from "./constants";
import { SKILL_LEVELS } from "./enums";

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

export const roundNumber = (x: number) => {
  if (x % 5 === 0) {
    return Math.floor(x / 5) * 5;
  } else {
    return Math.floor(x / 5) * 5 + 5;
  }
};

export const calculateScore = (cvData: CvType, scoreMap: Record<keyof CvType, number>): number => {
  return Object.keys(scoreMap).reduce((totalScore, key) => {
    const value = cvData[key as keyof CvType];
    const score = scoreMap[key as keyof CvType] || 0;

    if (Array.isArray(value)) {
      if (value.length > 0) {
        return totalScore + score;
      }
    } else if (value) {
      return totalScore + score;
    }

    return totalScore;
  }, 0);
};

export const constructDescription = (
  startDate: string | undefined,
  endDate: string | undefined,
  company: string | undefined,
  isCurrentWork: boolean,
): string => {
  const startDateFormatted = dateFormatter(startDate);
  let endDateFormatted = dateFormatter(endDate);

  if (isCurrentWork) {
    endDateFormatted = "current";
  }

  let description = "";

  if (startDateFormatted) {
    description += startDateFormatted;
  }

  if (endDateFormatted) {
    if (startDateFormatted) {
      description += ` - ${endDateFormatted}`;
    } else {
      description += endDateFormatted;
    }
  }

  if (company) {
    description += ` at ${company}`;
  }

  return description;
};

export const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export const updateTemplateImages = (templates: TemplateType[], images: string[], hostRoute: string): TemplateType[] => {
  return templates.map((template) => {
    const imagePath = images.find((img) => img.includes(template.name));
    return {
      name: template.name,
      route: template.route,
      imgURL: imagePath ? `${hostRoute}/${imagePath}` : IMG_PATH,
    };
  });
};
