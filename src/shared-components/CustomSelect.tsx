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
          className="relative flex flex-col bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer appearance-none">
          <option className="text-gray-300 text-sm px-4 bg-red-50" value="" disabled>
            Select your level
          </option>
          {options.map((option) => (
            <option value={option.value} key={option.value} className="px-4 bg-red-50 hover:bg-blue-100">
              {option.label}
            </option>
          ))}
        </select>
      )}
    />
  );
};
