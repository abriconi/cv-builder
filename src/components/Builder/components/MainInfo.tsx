import { useForm } from "react-hook-form";
import { cvFields } from "../../../constants";
import { CustomInput } from "../../../shared-components/CustomInput";

export const MainInfo = () => {
  const { control } = useForm();
  return (
    <>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="firstName" control={control} type="text" placeholder={cvFields.firstName} rules={{ required: true }} />
        <CustomInput name="lastName" control={control} type="text" placeholder={cvFields.lastName} rules={{ required: true }} />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="email" control={control} type="email" placeholder={cvFields.email} rules={{ required: true }} />
        <CustomInput name="phone" control={control} type="tel" placeholder={cvFields.phone} rules={{ required: true }} />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput name="country" control={control} type="text" placeholder={cvFields.country} rules={{ required: true }} />
        <CustomInput name="city" control={control} type="text" placeholder={cvFields.city} rules={{ required: true }} />
      </div>
    </>
  );
};
