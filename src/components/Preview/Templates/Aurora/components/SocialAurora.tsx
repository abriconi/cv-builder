import React from "react";
import { SocialType } from "../../../../../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

interface Props {
  socialLinks: SocialType[];
}
export const SocialAurora: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      {socialLinks.map((link, index) => (
        <div key={index} className="flex flex-row gap-2 items-center">
          <FontAwesomeIcon icon={faLink} />
          <a href={link.link} className="underline">
            {link.label}
          </a>
        </div>
      ))}
    </div>
  );
};
