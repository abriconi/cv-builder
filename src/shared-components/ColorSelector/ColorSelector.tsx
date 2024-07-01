import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ColorPalette } from "../../types";
import { ButtonColorSelector } from "./ColorItem";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import style from "./style.module.css";
import { useEffect, useState } from "react";

interface ColorSelectorProps {
  colors: ColorPalette[];
  setColor: (color: ColorPalette) => void;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ colors, setColor }) => {
  const [chosenColor, setChosenColor] = useState(0);

  const handleClick = (indexColor: number, color: ColorPalette) => {
    setChosenColor(indexColor);
    setColor(color);
  };

  useEffect(() => {
    setChosenColor(0);
  }, [colors]);

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      {colors.map((color, index) => (
        <ButtonColorSelector
          onClick={() => handleClick(index, color)}
          color={color.primary}
          key={index}
          chosen={index === chosenColor ? true : false}>
          {index === chosenColor && <FontAwesomeIcon icon={faCheck} color="white" className={clsx(style.check)} />}
        </ButtonColorSelector>
      ))}
    </div>
  );
};
