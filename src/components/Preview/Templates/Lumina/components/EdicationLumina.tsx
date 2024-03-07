import { EducationItem } from "../../../../../shared-components/EducationItem";
import { EducationTypeWithId } from "../../../../../types";

interface Props {
  education: EducationTypeWithId[];
}

export const EducationLumina: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-xl font-semibold">Education</h2>
      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
