import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EducationTypeWithId } from "../../../../types";
import { EducationItem } from "../../../../shared-components/EducationItem";

interface EducationProps {
  education: EducationTypeWithId[];
}

export const EducationVertex: React.FC<EducationProps> = ({ education }: EducationProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex flex-row gap-2 items-center">
        <FontAwesomeIcon icon={faGraduationCap} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
        <h2 className="text-l">Education</h2>
      </div>

      <div className="flex flex-col gap-2">
        {education.map((item, index) => (
          <EducationItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
