import { CustomInput } from "../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../helpers/constants";
import { CustomUploadFile } from "../../../shared-components/CustomUploadFile";

export const Header = () => {
  return (
    <div className="flex flex-row gap-4 items-end">
      <div className="w-1/2">
        <CustomInput name="jobPosition" label={CV_FIELDS.jobPosition} rules={{ required: true }} />
      </div>
      <div className="w-1/2">
        <CustomUploadFile />
      </div>
    </div>
  );
};
