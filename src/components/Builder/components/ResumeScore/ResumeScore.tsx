import React, { useMemo } from "react";
import { CvType } from "../../../../types";
import clsx from "clsx";

interface ScoreProps {
  cvData: CvType;
}

export const ResumeScore: React.FC<ScoreProps> = ({ cvData }: ScoreProps) => {
  const score = useMemo(() => {
    let score = 0;

    score += cvData.jobPosition ? 10 : 0;
    score += cvData.firstName && cvData.lastName && cvData.email && cvData.phone && cvData.country && cvData.city ? 30 : 0;
    score += cvData.summary ? 10 : 0;
    score += cvData.experience.length >= 1 ? 10 : 0;
    score += cvData.education.length >= 1 ? 10 : 0;
    score += cvData.social.length >= 1 ? 10 : 0;
    score += cvData.languages.length >= 1 ? 10 : 0;
    score += cvData.skills.length >= 1 ? 10 : 0;

    return score;
  }, [cvData]);

  return (
    <div className="w-full flex flex-col gap-2">
      <p>
        <span className="bg-green-500 text-white py-1 px-1 rounded">{`${score}%`}</span> Resume score
      </p>
      <div className="w-full h-2.5 relative rounded bg-blue-100">
        <span
          className={clsx("h-2.5 rounded bg-blue-600 absolute h-2.5", {
            "w-1/6": score === 10,
            "w-1/5": score === 20,
            "w-1/4": score === 30,
            "w-1/3": score === 40,
            "w-1/2": score === 50,
            "w-2/3": score === 60,
            "w-3/4": score === 70,
            "w-4/5": score === 80,
            "w-5/6": score === 90,
            "w-full": score === 100,
          })}
        />
      </div>
    </div>
  );
};
