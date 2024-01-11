import { Controller, RegisterOptions } from "react-hook-form";
import { SelectOptions } from "../types";

interface SelectProps {
  name: string;
  control: any;
  options: SelectOptions[];
  rules: RegisterOptions;
}

export const CustomSelect: React.FC<SelectProps> = ({ name, control, options, rules }: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <select
          {...field}
          className="pr-2 bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
          <option className="text-gray-300 text-sm" value="" disabled>
            Select your level
          </option>
          {options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};
