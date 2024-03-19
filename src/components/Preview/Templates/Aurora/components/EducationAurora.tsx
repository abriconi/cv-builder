import { EducationTypeWithId } from "../../../../../types";
import { EducationItem } from "../../../../../shared-components/EducationItem";
import { HeadingAurora } from "./HeadingAurora";

interface Props {
  education: EducationTypeWithId[];
}

export const EducationAurora: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Education" />
      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
