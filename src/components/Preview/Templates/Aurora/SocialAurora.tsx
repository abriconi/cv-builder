import React from "react";
import { SocialTypeWithId } from "../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  socialLinks: SocialTypeWithId[];
}
export const SocialAurora: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {socialLinks.map((link) => (
        <div key={link.id} className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faLink} />
          <a href={link.link} className="underline">
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
};
