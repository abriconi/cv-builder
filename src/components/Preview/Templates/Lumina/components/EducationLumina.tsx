import { EducationItem } from "../../../../../shared-components/EducationItem";
import { EducationTypeWithId } from "../../../../../types";
import { HeadingLumina } from "./HeadingLumina";

interface Props {
  education: EducationTypeWithId[];
}

export const EducationLumina: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Education" />
      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
