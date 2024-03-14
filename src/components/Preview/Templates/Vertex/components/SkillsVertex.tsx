import { SkillItem } from "../../../../../shared-components/SkillItem";
import { SkillType } from "../../../../../types";

interface Props {
  skills: SkillType[];
}
export const SkillsVertex: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1">Skills:</h2>
      <div className="flex flex-col gap-2 w-full">
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
