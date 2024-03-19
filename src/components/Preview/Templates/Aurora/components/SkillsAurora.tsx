import React from "react";
import { SkillType } from "../../../../../types";
import { SkillItem } from "../../../../../shared-components/SkillItem";
import { HeadingAurora } from "./HeadingAurora";

interface Props {
  skills: SkillType[];
}
export const SkillsAurora: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start w-full">
      <HeadingAurora title="Skills" tag="h2" />
      <div className="flex flex-col gap-2 w-full">
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
