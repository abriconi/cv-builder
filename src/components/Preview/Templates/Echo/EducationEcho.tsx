import React from "react";
import { EducationTypeWithId } from "../../../../types";
import { EducationItem } from "../../../../shared-components/EducationItem";
import { VerticalDivider } from "../../../../shared-components/VerticalDivider/VerticalDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

interface Props {
  education: EducationTypeWithId[];
}

export const EducationEcho: React.FC<Props> = ({ education }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-4 items-center -ml-1.5">
        <FontAwesomeIcon icon={faGraduationCap} style={{ color: "var(--primary-color)" }} />
        <h2 className="uppercase" style={{ color: "var(--primary-color)" }}>
          Education
        </h2>
      </div>
      <div>
        {education.map((item, index) => (
          <VerticalDivider key={index}>
            <EducationItem item={item} key={index} />
          </VerticalDivider>
        ))}
      </div>
    </div>
  );
};
