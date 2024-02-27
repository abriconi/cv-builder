import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../../../shared-components/Buttons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import React from "react";

interface Props {
  handlePrint: () => void;
}
export const Settings: React.FC<Props> = ({ handlePrint }: Props) => {
  const selectTemplate = () => console.log("Select template clicked");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between w-full">
        <Button name="Select template" onClick={selectTemplate} icon={<FontAwesomeIcon icon={faGear} />} aligning="self-start" />
        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>
    </div>
  );
};
