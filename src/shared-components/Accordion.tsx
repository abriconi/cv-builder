import React, { useState } from "react";
import { HEADING } from "../helpers/enums";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  title?: string;
  description?: string;
  status: boolean;
  children: any;
}

export const Accordion: React.FC<Props> = ({ title, description, children, status }) => {
  const [isOpen, setIsOpen] = useState(status);

  return (
    <div className="border border-gray-300 rounded-md shadow-md w-full">
      <div className="flex items-center justify-between py-3 px-4 cursor-pointer bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900">{title || HEADING.notSpecified}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        {isOpen && <FontAwesomeIcon icon={faChevronUp} />}
        {!isOpen && <FontAwesomeIcon icon={faChevronDown} />}
      </div>
      {isOpen && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  );
};
