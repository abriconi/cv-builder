import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExperienceTypeWithId } from "../../../../../types";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { ExperienceItem } from "../../../../../shared-components/ExperienceItem";
import { VerticalDivider } from "../../../../../shared-components/VerticalDivider/VerticalDivider";

interface Props {
  experience: ExperienceTypeWithId[];
}
export const ExperienceEcho: React.FC<Props> = ({ experience }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center -ml-1.5">
        <FontAwesomeIcon icon={faBriefcase} style={{ color: "var(--primary-color)" }} />
        <h2 className="uppercase" style={{ color: "var(--primary-color)" }}>
          Experience
        </h2>
      </div>
      <div>
        {experience.map((item, index) => (
          <VerticalDivider key={index}>
            <ExperienceItem item={item} key={index} />
          </VerticalDivider>
        ))}
      </div>
    </div>
  );
};
