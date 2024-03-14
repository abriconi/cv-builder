import { ExperienceTypeWithId } from "../../../../../types";
import { ExperienceItem } from "../../../../../shared-components/ExperienceItem";

interface Props {
  experience: ExperienceTypeWithId[];
}
export const ExperienceAurora: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-xl font-semibold">Experience</h2>

      <div className="flex flex-col gap-2">
        {experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
