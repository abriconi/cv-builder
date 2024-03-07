import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExperienceTypeWithId } from "../../../../types";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ExperienceItem } from "../../../../shared-components/ExperienceItem";

interface ExperienceProps {
  experience: ExperienceTypeWithId[];
}

export const ExperienceVertex: React.FC<ExperienceProps> = ({ experience }: ExperienceProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex flex-row gap-2 items-center">
        <FontAwesomeIcon icon={faBriefcase} className="text-blue-600" style={{ color: "var(--primary-color)" }} />
        <h2 className="text-l">Experience</h2>
      </div>

      <div className="flex flex-col gap-2">
        {experience.map((item, index) => (
          <ExperienceItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};
