import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../shared-components/Buttons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import React, { useMemo } from "react";
import { COLOR_PALETTE, VERTEX } from "../../../constants";
import { findColors } from "../../../helpers";

interface Props {
  handlePrint: () => void;
}
export const Settings: React.FC<Props> = ({ handlePrint }: Props) => {
  const colors = useMemo(() => findColors(VERTEX, COLOR_PALETTE), []);

  const selectTemplate = () => console.log("Select template clicked");
  const root = document.documentElement;

  const handleClick = (primary: string, primaryShade: string) => {
    root.style.setProperty("--primary-color", primary);
    root.style.setProperty("--primary-shade", primaryShade);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between w-full">
        <Button name="Select template" onClick={selectTemplate} icon={<FontAwesomeIcon icon={faGear} />} aligning="self-start" />
        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-white">Choose color</p>
        <div className="flex flex-row gap-2 h-11">
          {colors.map((color) => (
            <button
              key={color.color_name}
              className={`rounded-full w-10 h-10 cursor-pointer hover:w-11 hover:h-11`}
              onClick={() => handleClick(color.primary, color.primary_shade)}
              style={{ backgroundColor: color.primary }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
