import { CV_FIELDS } from "../../../helpers/enums";
import { CustomInput } from "../../../shared-components/CustomInput";

export const MainInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Personal details</h1>
      <div className="flex flex-row gap-4">
        <CustomInput name="firstName" label={CV_FIELDS.firstName} />
        <CustomInput name="lastName" label={CV_FIELDS.lastName} />
      </div>
      <div className="flex flex-row gap-4">
        <CustomInput name="email" type="email" label={CV_FIELDS.email} />
        <CustomInput name="phone" type="tel" label={CV_FIELDS.phone} />
      </div>
      <div className="flex flex-row gap-4">
        <CustomInput name="country" label={CV_FIELDS.country} />
        <CustomInput name="city" label={CV_FIELDS.city} />
      </div>
    </div>
  );
};
