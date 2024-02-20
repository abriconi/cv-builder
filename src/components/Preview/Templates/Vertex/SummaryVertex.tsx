import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface SummaryProps {
  summary: string;
}
export const SummaryVertex: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <div className="flex flex-row gap-2 items-center">
        <FontAwesomeIcon icon={faUser} className="text-blue-600" />
        <h2 className="text-l">Profile</h2>
      </div>
      <p className="text-sm">{summary}</p>
    </div>
  );
};
