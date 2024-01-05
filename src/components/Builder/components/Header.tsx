import { useForm } from "react-hook-form";
import { CustomInput } from "../../../shared-components/CustomInput";
import { cvFields } from "../../../constants";
import { CustomUploadFile } from "../../../shared-components/CustomUploadFile";

export const Header = () => {
  const { control } = useForm();
  return (
    <div className="flex flex-col items-center sm:flex-row md:flex-row gap-4">
      <CustomInput name="jobPosition" control={control} type="text" placeholder={cvFields.jobPosition} rules={{ required: true }} />
      <CustomUploadFile />
    </div>
  );
};
