import React from "react";
import { LanguagesType } from "../../../../../types";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";
import clsx from "clsx";
import styles from "../zenith.module.css";

interface Props {
  languages: LanguagesType[];
}

export const LanguagesZenith: React.FC<Props> = ({ languages }: Props) => {
  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Languages" />
      {languages.map((item, index) => (
        <div key={index} className="flex flex-row">
          <p className={clsx(styles.dotBorder, "text-sm")}>{item.language}</p>
          <p className="text-sm text-nowrap">{item.level}</p>
        </div>
      ))}
    </WrapperShade>
  );
};
