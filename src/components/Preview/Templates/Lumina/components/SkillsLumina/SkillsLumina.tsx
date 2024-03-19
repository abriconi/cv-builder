import { SkillType } from "../../../../../../types";
import { HeadingLumina } from "../HeadingLumina";
import { SkillItemLumina } from "./SkillItemLumina";

interface Props {
  skills: SkillType[];
}
export const SkillsLumina: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingLumina tag="h2" title="skills" uppercase={true} />
      <div className="flex flex-col gap-2 w-full">
        {skills.map((skill, index) => (
          <SkillItemLumina skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
