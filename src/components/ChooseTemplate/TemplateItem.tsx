import React from "react";
import { TemplateType } from "../../types";
import { useTemplateContext } from "../../context/TemplateContext";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

interface Props {
  templateItem: TemplateType;
  chosen: boolean;
}
export const TemplateItem: React.FC<Props> = ({ templateItem, chosen }) => {
  const { setTemplate } = useTemplateContext();
  return (
    <div className="flex flex-col gap-1 items-center" onClick={() => setTemplate(templateItem)}>
      <h2 className="text-l text-white capitalize">{templateItem.name}</h2>
      <button
        type="button"
        className={clsx("w-[170px] h-[240px] relative overflow-y-auto cursor-pointer rounded-md box-content border-4", {
          "border-blue-500 border-opacity-100": chosen,
          "border-transparent": !chosen,
        })}>
        {chosen && (
          <FontAwesomeIcon
            icon={faCheck}
            color="white"
            className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full p-4"
          />
        )}
        <img src={templateItem.img} alt="template preview" />
      </button>
    </div>
  );
};
