import React from "react";
import { TemplateType } from "../../types";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { IMG_PATH } from "../../helpers/constants";

interface Props {
  templateItem: TemplateType;
  chosen: boolean;
  imgURL?: string;
  handleClick: (item: TemplateType) => void;
}
export const TemplateItem: React.FC<Props> = ({ templateItem, chosen, imgURL, handleClick }) => {
  return (
    <div className="flex flex-col gap-1 items-center" onClick={() => handleClick(templateItem)}>
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
        <img src={imgURL} alt={`preview ${templateItem.name}`} className={clsx(imgURL === IMG_PATH ? "w-[170px] h-[240px]" : "")} />
      </button>
    </div>
  );
};
