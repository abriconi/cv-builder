import clsx from "clsx";
import { SkillType } from "../../../../../types";
import styles from "../zenith.module.css";
import { useMemo } from "react";
import { determineSkillLevel } from "../../../../../helpers";

interface Props {
  skill: SkillType;
}

export const SkillZenith: React.FC<Props> = ({ skill }: Props) => {
  const levelMark = useMemo(() => determineSkillLevel(skill.level), [skill.level]);
  return (
    <div className="flex flex-row">
      <p className={clsx(styles.dotBorder, "text-sm")}>{skill.skill}</p>
      <p className="text-sm text-nowrap">{levelMark}</p>
    </div>
  );
};
