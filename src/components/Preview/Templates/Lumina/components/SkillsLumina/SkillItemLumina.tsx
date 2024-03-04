import clsx from "clsx";
import { SkillTypeWithId } from "../../../../../../types";
import { SKILL_LEVELS } from "../../../../../../helpers/constants";

interface Props {
  skill: SkillTypeWithId;
}
export const SkillItemLumina: React.FC<Props> = ({ skill }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{skill.skill}</p>
      <div style={{ backgroundColor: "var(--primary-shade)" }} className="w-full h-1 relative">
        <span
          className={clsx("absolute h-1 rounded bg-white", {
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
