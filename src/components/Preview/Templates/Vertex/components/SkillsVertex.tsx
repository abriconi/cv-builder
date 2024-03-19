import { SkillItem } from "../../../../../shared-components/SkillItem";
import { SkillType } from "../../../../../types";
import { HeadingVertex } from "./HeadingVertex";

interface Props {
  skills: SkillType[];
}
export const SkillsVertex: React.FC<Props> = ({ skills }: Props) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingVertex tag="h2" title="Skills" />

      <div className="flex flex-col gap-1 w-full">
        {skills.map((skill, index) => (
          <SkillItem skill={skill} key={index} />
        ))}
      </div>
    </div>
  );
};
