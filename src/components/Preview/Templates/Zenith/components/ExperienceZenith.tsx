import { ExperienceTypeWithId } from "../../../../../types";
import { ExperienceItemZenith } from "./ExperienceItemZenith";
import { HeadingZenith } from "./HeadingZenith";

interface Props {
  experience: ExperienceTypeWithId[];
}
export const ExperienceZenith: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingZenith tag="h2" title="Experience" />
      {experience.map((item, index) => (
        <ExperienceItemZenith item={item} key={index} />
      ))}
    </div>
  );
};
