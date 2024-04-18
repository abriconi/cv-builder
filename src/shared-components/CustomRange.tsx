import React, { useState } from "react";
import { RegisterOptions, useController } from "react-hook-form";
import { SKILL_LEVELS } from "../helpers/constants";
import { CustomRangeItem } from "./CustomRangeItem";
import clsx from "clsx";

interface Props {
  name: string;
  level: string;
  rules?: RegisterOptions;
  id: string;
}

export const CustomRange: React.FC<Props> = ({ name, rules, id, level }: Props) => {
  const [selectedLevel, setSelectedLevel] = useState<string>(level || SKILL_LEVELS.novice);
  const { field } = useController({ name, rules });
  return (
    <div className="flex flex-col w-full h-full">
      <p>
        Level -{" "}
        <span
          className={clsx({
            "text-red-300": selectedLevel === SKILL_LEVELS.novice,
            "text-orange-300": selectedLevel === SKILL_LEVELS.beginner,
            "text-pink-300": selectedLevel === SKILL_LEVELS.skillful,
            "text-blue-300": selectedLevel === SKILL_LEVELS.experienced,
            "text-green-300": selectedLevel === SKILL_LEVELS.expert,
          })}>
          {selectedLevel}
        </span>
      </p>
      <div
        className={clsx(
          {
            "bg-red-100": selectedLevel === SKILL_LEVELS.novice,
            "bg-orange-100": selectedLevel === SKILL_LEVELS.beginner,
            "bg-pink-100": selectedLevel === SKILL_LEVELS.skillful,
            "bg-blue-100": selectedLevel === SKILL_LEVELS.experienced,
            "bg-green-100": selectedLevel === SKILL_LEVELS.expert,
          },
          "flex flex-row rounded-lg text-sm items-center border border-gray-300 shadow-md transition-all duration-300 ease-in-out",
        )}>
        {Object.values(SKILL_LEVELS).map((level, index, array) => (
          <React.Fragment key={level}>
            <CustomRangeItem
              levelName={level}
              selectedLevel={selectedLevel}
              selectLevel={() => setSelectedLevel(level)}
              field={field}
              id={`${id}-${level}`}
            />
            {index !== array.length - 1 && <div className="bg-gray-300 w-px h-6" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
