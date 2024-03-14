import React from "react";
import { EducationTypeWithId } from "../../../../../types";
import { dateFormatter } from "../../../../../helpers";
import clsx from "clsx";
import styles from "../zenith.module.css";

interface Props {
  item: EducationTypeWithId;
}

export const EducationItemZenith: React.FC<Props> = ({ item }: Props) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);
  return (
    <div className="flex flex-col gap-1 pb-4">
      <h4 className={clsx(styles.primaryBackground, "font-semibold text-l text-white")}>
        {item.degree && <span>{`${item.degree} at `}</span>}
        {item.school}, {item.location}
      </h4>
      <p className="text-l">{`${startDate} - ${endDate}`}</p>
      {item.description && <p className="text-sm whitespace-pre-line">{item.description}</p>}
    </div>
  );
};
