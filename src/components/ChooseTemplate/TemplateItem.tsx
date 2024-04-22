import React from "react";
import { TemplateType } from "../../types";
import clsx from "clsx";
import style from "./style.module.css";

interface Props {
  template: TemplateType;
}
export const TemplateItem: React.FC<Props> = ({ template }: Props) => {
  return (
    <div className="flex flex-col gap-1 items-center" key={template.name}>
      <h2 className="text-l text-white capitalize">{template.name}</h2>
      <div className={clsx(style.card)}>
        <img src={require(`../../img/${template.img}`)}></img>
      </div>
    </div>
  );
};
