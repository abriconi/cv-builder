import { EducationTypeWithId } from "../../../../../types";
import { EducationItem } from "../../../../../shared-components/EducationItem";

interface Props {
  education: EducationTypeWithId[];
}

export const EducationAurora: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-l">Education</h2>
      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
