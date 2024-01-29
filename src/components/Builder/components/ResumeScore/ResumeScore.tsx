import React from "react";
import { CvType } from "../../../../types";

interface ScoreProps {
  cvData: CvType;
}

export const ResumeScore: React.FC<ScoreProps> = ({ cvData }: ScoreProps) => {
  const calculateScore = () => {
    let score = 0;

    if (cvData.jobPosition) {
      score += 10;
    }
    if (cvData.firstName && cvData.lastName && cvData.email && cvData.phone && cvData.country && cvData.city) {
      score += 30;
    }
    if (cvData.summary) {
      score += 10;
    }
    if (cvData.experience.length >= 1) {
      score += 10;
    }
    if (cvData.education.length >= 1) {
      score += 10;
    }
    if (cvData.social.length >= 1) {
      score += 10;
    }
    if (cvData.languages.length >= 1) {
      score += 10;
    }
    if (cvData.skills.length >= 1) {
      score += 10;
    }

    return score;
  };

  const score = calculateScore();

  return (
    <div className="w-full flex flex-col gap-2">
      <p>
        <span className="bg-green-500 text-white py-1 px-1 rounded">{`${score}%`}</span> Resume score
      </p>
      <div className={`bg-blue-600 h-2.5 rounded-full w-${score * 0.1 * 10} transition-all duration-500`}></div>
    </div>
  );
};
