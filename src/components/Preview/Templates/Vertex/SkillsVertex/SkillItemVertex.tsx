import clsx from "clsx";
import { SkillTypeWithId } from "../../../../../types";
import { SKILL_LEVELS } from "../../../../../constants";

interface Props {
  skill: SkillTypeWithId;
}
export const SkillItemVertex: React.FC<Props> = ({ skill }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{skill.skill}</p>
      <div className="bg-blue-100 w-full h-1 relative rounded">
        <span
          className={clsx("absolute h-1 bg-blue-500 rounded", {
            "w-1/6": skill.level === SKILL_LEVELS.novice,
            "w-2/6": skill.level === SKILL_LEVELS.beginner,
            "w-1/2": skill.level === SKILL_LEVELS.skillful,
            "w-4/5": skill.level === SKILL_LEVELS.experienced,
            "w-full": skill.level === SKILL_LEVELS.expert,
          })}></span>
      </div>
    </div>
  );
};
