import clsx from "clsx";
import { SKILL_LEVELS } from "../helpers/constants";

interface ItemProps {
  selectedLevel: string;
  selectLevel: () => void;
  id: string;
  field: any;
  levelName: string;
}

export const CustomRangeItem: React.FC<ItemProps> = ({ selectedLevel, selectLevel, id, field, levelName }: ItemProps) => {
  const isLevelSelected = selectedLevel === levelName;
  const isNoviceBG = selectedLevel === SKILL_LEVELS.novice;
  const isBeginnerBG = selectedLevel === SKILL_LEVELS.beginner;
  const isSkillfulBG = selectedLevel === SKILL_LEVELS.skillful;
  const isExperiencedBG = selectedLevel === SKILL_LEVELS.experienced;
  const isExpertBG = selectedLevel === SKILL_LEVELS.expert;

  return (
    <label
      htmlFor={id}
      className={clsx(
        {
          "hover:bg-red-300": isNoviceBG,
          "hover:bg-orange-300": isBeginnerBG,
          "hover:bg-pink-300": isSkillfulBG,
          "hover:bg-blue-300": isExperiencedBG,
          "hover:bg-green-300": isExpertBG,
        },
        {
          "bg-red-300": isLevelSelected && isNoviceBG,
          "bg-orange-300": isLevelSelected && isBeginnerBG,
          "bg-pink-300": isLevelSelected && isSkillfulBG,
          "bg-blue-300": isLevelSelected && isExperiencedBG,
          "bg-green-300": isLevelSelected && isExpertBG,
        },
        "w-1/5 py-5 cursor-pointer rounded-lg flex items-center`",
      )}>
      <input {...field} type="radio" id={id} className="appearance-none" onClick={selectLevel} value={levelName} />
    </label>
  );
};
