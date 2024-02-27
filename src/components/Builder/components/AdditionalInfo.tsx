import { useState } from "react";
import { CustomInput } from "../../../shared-components/CustomInput";
import { useFormContext } from "react-hook-form";
import { CV_FIELDS } from "../../../helpers/constants";
import { ButtonText } from "../../../shared-components/Buttons";

export const AdditionalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { control } = useFormContext();
  return (
    <>
      {isOpen && (
        <div className="flex flex-col gap-4 transition-max-height duration-300">
          <CustomInput name={"address"} control={control} type={"text"} label={CV_FIELDS.address} />
          <CustomInput name={"postalCode"} control={control} type={"text"} label={CV_FIELDS.postalCode} />
          <CustomInput name={"nationality"} control={control} type={"text"} label={CV_FIELDS.nationality} />
          <CustomInput name={"dateOfBirth"} control={control} type={"text"} label={CV_FIELDS.dateOfBirth} />
          <CustomInput name={"placeOfBirth"} control={control} type={"text"} label={CV_FIELDS.placeOfBirth} />
        </div>
      )}
      <ButtonText
        aligning="self-start"
        name={isOpen ? "Hide additional details" : "+ Add additional details"}
        onClick={() => setIsOpen(!isOpen)}
      />
    </>
  );
};
