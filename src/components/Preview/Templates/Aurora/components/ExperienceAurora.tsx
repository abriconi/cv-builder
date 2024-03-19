import { ExperienceTypeWithId } from "../../../../../types";
import { ExperienceItem } from "../../../../../shared-components/ExperienceItem";
import { HeadingAurora } from "./HeadingAurora";

interface Props {
  experience: ExperienceTypeWithId[];
}
export const ExperienceAurora: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Experience" />

      <div className="flex flex-col gap-2">
        {experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
