import { SectionHeader } from "../../../../shared-components/SectionHeader/SectionHeader";
import { SkillItem } from "../../../../shared-components/SkillItem";
import { SkillTypeWithId } from "../../../../types";

interface Props {
  skills: SkillTypeWithId[];
}

export const SkillsEcho: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <SectionHeader header="Skills" />
      <div className="w-full">
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} aligning="self-center" />
        ))}
      </div>
    </div>
  );
};
