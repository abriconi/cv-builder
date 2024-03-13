import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TemplateType } from "../../types";
import { ButtonColorSelector } from "./ColorItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import style from "./style.module.css";
import { useState } from "react";

interface ColorSelectorProps {
  template: TemplateType | undefined;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ template }: ColorSelectorProps) => {
  const root = document.documentElement;
  const [chosenColor, setChosenColor] = useState("");

  if (template && !chosenColor) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].primary_shade);
  }

  const handleClick = (primary: string, primaryShade: string) => {
    root.style.setProperty("--primary-color", primary);
    root.style.setProperty("--primary-shade", primaryShade);
    setChosenColor(primary);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <div className="flex flex-row gap-2 h-11 items-center ">
        {template?.colors.map((color) => (
          <ButtonColorSelector
            onClick={() => handleClick(color.primary, color.primary_shade)}
            color={color.primary}
            key={color.color_name}
            chosen={color.primary === chosenColor ? true : false}>
            {color.primary === chosenColor && <FontAwesomeIcon icon={faCheck} color="white" className={clsx(style.check)} />}
          </ButtonColorSelector>
        ))}
      </div>
    </div>
  );
};
