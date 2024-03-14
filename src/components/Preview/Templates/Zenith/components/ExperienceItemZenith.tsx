import React from "react";
import { ExperienceTypeWithId } from "../../../../../types";
import clsx from "clsx";
import styles from "../zenith.module.css";
import { dateFormatter } from "../../../../../helpers";

interface Props {
  item: ExperienceTypeWithId;
}
export const ExperienceItemZenith: React.FC<Props> = ({ item }: Props) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);
  return (
    <div className="flex flex-col gap-1 pb-4">
      <h4 className={clsx(styles.primaryBackground, "font-semibold text-l text-white")}>
        {item.title} at {item.companyName}
        {item.location && <span>{`, ${item.location}`}</span>}
      </h4>
      <p className="text-l">{`${startDate} - ${endDate}`}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
