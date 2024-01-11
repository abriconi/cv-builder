import { useState } from "react";
import { CustomInput } from "../../../shared-components/CustomInput";
import { useFormContext } from "react-hook-form";
import { CV_FIELDS } from "../../../constants";

export const AdditionalInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { control } = useFormContext();
  return (
    <div className="rounded-md mb-2 bg-gray-50 border border-gray-300 shadow-md text-gray-400 text-sm">
      <div className="flex justify-between items-center p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>Add additional details</div>
        <div className={`transform ${isOpen ? "rotate-180" : "rotate-0"} transition-transform`}>▼</div>
      </div>
      {isOpen && (
        <div className="p-4 flex flex-col gap-4">
          <CustomInput name={"address"} control={control} type={"text"} placeholder={CV_FIELDS.address} />
          <CustomInput name={"postalCode"} control={control} type={"text"} placeholder={CV_FIELDS.postalCode} />
          <CustomInput name={"nationality"} control={control} type={"text"} placeholder={CV_FIELDS.nationality} />
          <CustomInput name={"dateOfBirth"} control={control} type={"text"} placeholder={CV_FIELDS.dateOfBirth} />
          <CustomInput name={"placeOfBirth"} control={control} type={"text"} placeholder={CV_FIELDS.placeOfBirth} />
        </div>
      )}
    </div>
  );
};
