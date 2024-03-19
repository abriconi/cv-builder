import React from "react";
import { HeadingLumina } from "./HeadingLumina";

interface SummaryProps {
  summary: string;
}
export const SummaryLumina: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingLumina tag="h2" title="Profile" />
      <p className="text-sm">{summary}</p>
    </div>
  );
};
