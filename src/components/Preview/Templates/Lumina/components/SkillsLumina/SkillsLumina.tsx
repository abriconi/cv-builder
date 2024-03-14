import { SkillType } from "../../../../../../types";
import { SkillItemLumina } from "./SkillItemLumina";

interface Props {
  skills: SkillType[];
}
export const SkillsLumina: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1 font-semibold">SKILLS</h2>
      <div className="flex flex-col gap-2 w-full">
        {skills.map((skill, index) => (
          <SkillItemLumina skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
