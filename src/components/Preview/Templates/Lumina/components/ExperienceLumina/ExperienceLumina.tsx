import { ExperienceTypeWithId } from "../../../../../../types";
import { ExperienceItemLumina } from "./ExperienceItemLumina";

interface Props {
  experience: ExperienceTypeWithId[];
}

export const ExperienceLumina: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-xl font-semibold">Experience</h2>

      <div className="flex flex-col gap-2">
        {experience.map((item, index) => (
          <ExperienceItemLumina key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
