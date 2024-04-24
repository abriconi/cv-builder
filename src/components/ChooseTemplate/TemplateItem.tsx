import React from "react";
import { TemplateType } from "../../types";
import { useTemplateContext } from "../../context/TemplateContext";

interface Props {
  templateItem: TemplateType;
}
export const TemplateItem: React.FC<Props> = ({ templateItem }: Props) => {
  const { setTemplate } = useTemplateContext();
  return (
    <div className="flex flex-col gap-1 items-center" key={templateItem.name} onClick={() => setTemplate(templateItem)}>
      <h2 className="text-l text-white capitalize">{templateItem.name}</h2>
      <div className="w-[170px] h-[240px] overflow-y-auto cursor-pointer border border-black rounded-md">
        <img src={require(`../../img/${templateItem.img}`)} alt="template preview"></img>
      </div>
    </div>
  );
};
