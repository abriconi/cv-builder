import { SkillTypeWithId } from "../../../../../types";
import { SkillItemVertex } from "./SkillItemVertex";

interface Props {
  skills: SkillTypeWithId[];
}
export const SkillsVertex: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1">Skills:</h2>
      <div className="flex flex-col gap-2 w-full">
        {skills.map((skill, index) => (
          <SkillItemVertex skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};