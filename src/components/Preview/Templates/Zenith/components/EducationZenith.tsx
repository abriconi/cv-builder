import { EducationTypeWithId } from "../../../../../types";
import { EducationItemZenith } from "./EducationItemZenith";
import { HeadingZenith } from "./HeadingZenith";

interface Props {
  education: EducationTypeWithId[];
}
export const EducationZenith: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingZenith tag="h2" title="Education" />
      {education.map((item, index) => (
        <EducationItemZenith item={item} key={index} />
      ))}
    </div>
  );
};
