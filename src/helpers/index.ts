import { CvType, TemplateType } from "../types";
import { IMG_PATH } from "./constants";
import { SKILL_LEVELS } from "./enums";

interface ScoreResult {
  currentScore: number;
  totalScore: number;
}

export const dateFormatter = (date: string | undefined): string => {
  if (date) {
    const parsedDate = new Date(`${date}-01`);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(parsedDate);
    return formattedDate;
  } else {
    return "";
  }
};

export const determineSkillLevel = (skillLevel: string) => {
  let result;

  switch (skillLevel) {
    case SKILL_LEVELS.novice:
      result = "1/5";
      break;

    case SKILL_LEVELS.beginner:
      result = "2/5";
      break;

    case SKILL_LEVELS.skillful:
      result = "3/5";
      break;

    case SKILL_LEVELS.experienced:
      result = "4/5";
      break;

    default:
      result = "5/5";
  }
  return result;
};

export const roundNumber = (x: number) => {
  if (x % 5 === 0) {
    return Math.floor(x / 5) * 5;
  } else {
    return Math.floor(x / 5) * 5 + 5;
  }
};

export const calculateScore = (cvData: CvType): ScoreResult => {
  const scoreMap: Record<keyof CvType, number> = {
    jobPosition: 10,
    firstName: 5,
    lastName: 5,
    email: 5,
    phone: 5,
    country: 5,
    city: 5,
    summary: 10,
    experience: 10,
    education: 10,
    social: 10,
    languages: 10,
    skills: 10,
  };

  const totalScore = Object.values(scoreMap).reduce((total, score) => total + score, 0);

  const currentScore = Object.keys(scoreMap).reduce((totalScore, key) => {
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

  return { currentScore, totalScore };
};

export const constructDescription = (
  startDate: string,
  endDate: string,
  isCurrent: boolean,
  item: "work" | "study",
  company?: string,
): string => {
  const startDateFormatted = dateFormatter(startDate);
  let endDateFormatted = dateFormatter(endDate);

  if (isCurrent) {
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

  if (item === "work" && company) {
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
