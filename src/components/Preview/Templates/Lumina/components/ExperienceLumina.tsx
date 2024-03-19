import { ExperienceTypeWithId } from "../../../../../types";
import { ExperienceItem } from "../../../../../shared-components/ExperienceItem";
import { HeadingLumina } from "./HeadingLumina";

interface Props {
  experience: ExperienceTypeWithId[];
}

export const ExperienceLumina: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Experience" />

      <div className="flex flex-col gap-2">
        {experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
