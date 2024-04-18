import { CV_FIELDS } from "../../../helpers/constants";
import { CustomInput } from "../../../shared-components/CustomInput";

export const MainInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Personal details</h1>
      <div className="flex flex-row gap-4">
        <CustomInput name="firstName" label={CV_FIELDS.firstName} rules={{ required: true }} />
        <CustomInput name="lastName" label={CV_FIELDS.lastName} rules={{ required: true }} />
      </div>
      <div className="flex flex-row gap-4">
        <CustomInput name="email" type="email" label={CV_FIELDS.email} rules={{ required: true }} />
        <CustomInput name="phone" type="tel" label={CV_FIELDS.phone} rules={{ required: true }} />
      </div>
      <div className="flex flex-row gap-4">
        <CustomInput name="country" type="text" label={CV_FIELDS.country} rules={{ required: true }} />
        <CustomInput name="city" type="text" label={CV_FIELDS.city} rules={{ required: true }} />
      </div>
    </div>
  );
};
