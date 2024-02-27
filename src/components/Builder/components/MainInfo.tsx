import { useFormContext } from "react-hook-form";
import { CV_FIELDS } from "../../../helpers/constants";
import { CustomInput } from "../../../shared-components/CustomInput";

export const MainInfo = () => {
  const { control } = useFormContext();
  return (
    <>
      <h1 className="text-xl font-semibold">Personal details</h1>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="firstName" control={control} type="text" label={CV_FIELDS.firstName} rules={{ required: true }} />
        <CustomInput name="lastName" control={control} type="text" label={CV_FIELDS.lastName} rules={{ required: true }} />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="email" control={control} type="email" label={CV_FIELDS.email} rules={{ required: true }} />
        <CustomInput name="phone" control={control} type="tel" label={CV_FIELDS.phone} rules={{ required: true }} />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="country" control={control} type="text" label={CV_FIELDS.country} rules={{ required: true }} />
        <CustomInput name="city" control={control} type="text" label={CV_FIELDS.city} rules={{ required: true }} />
      </div>
    </>
  );
};
