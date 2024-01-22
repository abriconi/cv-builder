import { useState } from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import { SKILL_LEVELS } from "../constants";
import { CustomRangeItem } from "./CustomRangeItem";
import { SkillOption } from "../types";

interface InputProps {
  name: string;
  control: any;
  rules?: RegisterOptions;
  id: string;
}

export const CustomRange: React.FC<InputProps> = ({ name, control, rules, id }: InputProps) => {
  const [selectedLevel, setSelectedLevel] = useState<SkillOption>(SKILL_LEVELS.skillful);

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="flex flex-col w-full h-full">
          <p>
            Level - <span className={`bg-${selectedLevel.color}`}>{selectedLevel.label}</span>
          </p>
          <div
            className={` flex flex-row bg-${selectedLevel.color}-100 rounded-lg text-sm items-center bg-gray-50 border border-gray-300 shadow-md transition-all duration-300 ease-in-out`}>
            <CustomRangeItem
              color={selectedLevel.color}
              selectLevel={() => setSelectedLevel(SKILL_LEVELS.novice)}
              levelValue={SKILL_LEVELS.novice.value}
              levelColor={SKILL_LEVELS.novice.color}
              field={field}
              id={`${id}-novice`}
            />
            <div className="bg-gray-300 w-px h-6" />
            <CustomRangeItem
              color={selectedLevel.color}
              selectLevel={() => setSelectedLevel(SKILL_LEVELS.beginner)}
              levelValue={SKILL_LEVELS.beginner.value}
              levelColor={SKILL_LEVELS.beginner.color}
              field={field}
              id={`${id}-beginner`}
            />
            <div className="bg-gray-300 w-px h-6" />
            <CustomRangeItem
              color={selectedLevel.color}
              selectLevel={() => setSelectedLevel(SKILL_LEVELS.skillful)}
              levelValue={SKILL_LEVELS.skillful.value}
              levelColor={SKILL_LEVELS.skillful.color}
              field={field}
              id={`${id}-skillful`}
            />
            <div className="bg-gray-300 w-px h-6" />
            <CustomRangeItem
              color={selectedLevel.color}
              selectLevel={() => setSelectedLevel(SKILL_LEVELS.experienced)}
              levelValue={SKILL_LEVELS.experienced.value}
              levelColor={SKILL_LEVELS.experienced.color}
              field={field}
              id={`${id}-experienced`}
            />
            <div className="bg-gray-300 w-px h-6" />
            <CustomRangeItem
              color={selectedLevel.color}
              selectLevel={() => setSelectedLevel(SKILL_LEVELS.expert)}
              levelValue={SKILL_LEVELS.expert.value}
              levelColor={SKILL_LEVELS.expert.color}
              field={field}
              id={`${id}-expert`}
            />
          </div>
        </div>
      )}
    />
  );
};
