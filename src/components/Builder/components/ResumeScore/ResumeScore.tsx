import React, { useMemo } from "react";
import { CvType } from "../../../../types";
import { calculateScore, roundNumber } from "../../../../helpers";

interface ScoreProps {
  cvData: CvType;
}

export const ResumeScore: React.FC<ScoreProps> = ({ cvData }) => {
  const score = useMemo(() => calculateScore(cvData), [cvData]);
  const percent = roundNumber((score.currentScore / score.totalScore) * 100);

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
