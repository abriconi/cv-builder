import React, { useState } from "react";
import { HEADING } from "../helpers/constants";

interface AccordionProps {
  title?: string;
  description?: string;
  status: boolean;
  children: any;
}

export const Accordion: React.FC<AccordionProps> = ({ title, description, children, status }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(status);

  return (
    <div className="border border-gray-300 rounded-md shadow-md w-full">
      <div className="flex items-center justify-between py-3 px-4 cursor-pointer bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-900">{title || HEADING.notSpecified}</h2>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
        <svg
          className={`w-6 h-6 transition-transform transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
        </svg>
      </div>
      {isOpen && <div className="p-4 border-t border-gray-300">{children}</div>}
    </div>
  );
};
