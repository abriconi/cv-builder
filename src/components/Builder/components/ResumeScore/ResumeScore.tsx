import React, { useMemo } from "react";
import { CvType } from "../../../../types";
import { calculateScore, roundNumber } from "../../../../helpers";

interface ScoreProps {
  cvData: CvType;
}

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

const maxScore = Object.values(scoreMap).reduce((acc, i) => acc + i, 0);

export const ResumeScore: React.FC<ScoreProps> = ({ cvData }: ScoreProps) => {
  const score = useMemo(() => calculateScore(cvData, scoreMap), [cvData]);
  const percent = roundNumber((score / maxScore) * 100);

  return (
    <div className="w-full flex flex-col gap-2">
      <p>
        <span className="bg-green-500 text-white py-1 px-1 rounded">{`${percent}%`}</span> Resume score
      </p>
      <div className="w-full h-2.5 relative rounded bg-blue-100">
        <span style={{ width: `${percent}%` }} className="h-2.5 rounded bg-blue-600 absolute h-2.5" />
      </div>
    </div>
  );
};
