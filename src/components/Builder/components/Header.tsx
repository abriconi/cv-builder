import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../helpers/constants";
import { CustomUploadFile } from "../../../shared-components/CustomUploadFile";

export const Header = () => {
  const { control } = useFormContext();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 items-center">
      <CustomInput name="jobPosition" control={control} type="text" label={CV_FIELDS.jobPosition} rules={{ required: true }} />
      <CustomUploadFile />
    </div>
  );
};
