import { SkillType } from "../../../../../types";
import { WrapperShade } from "./WrapperShade";
import { SkillZenith } from "./SkillZenith";
import { HeadingZenith } from "./HeadingZenith";

interface Props {
  skills: SkillType[];
}

export const SkillsZenith: React.FC<Props> = ({ skills }: Props) => {
  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Skills" />
      {skills.map((item, index) => (
        <SkillZenith skill={item} key={index} />
      ))}
    </WrapperShade>
  );
};
