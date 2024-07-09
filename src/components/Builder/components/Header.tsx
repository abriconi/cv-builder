import { CV_FIELDS } from "../../../helpers/enums";
import { CustomInput } from "../../../shared-components/CustomInput";
import { UserPhotoUploader } from "../../../shared-components/UserPhotoUploader/UserPhotoUploader";

export const Header = () => {
  return (
    <div className="flex flex-row gap-4 items-end">
      <div className="w-1/2">
        <CustomInput name="jobPosition" label={CV_FIELDS.jobPosition} />
      </div>
      <div className="w-1/2">
        <UserPhotoUploader />
      </div>
    </div>
  );
};
