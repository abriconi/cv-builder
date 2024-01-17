import { Controller, RegisterOptions } from "react-hook-form";
import { SelectOption } from "../types";

interface SelectProps {
  name: string;
  control: any;
  options: SelectOption[];
  rules: RegisterOptions;
  label: string;
  additionalLabel?: string;
}

export const CustomSelect: React.FC<SelectProps> = ({ name, control, options, rules, label, additionalLabel = "" }: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      defaultValue=""
      render={({ field }) => (
        <label className="w-full flex flex-col">
          <div className="flex flex-row justify-between">
            <span>{label}</span>
            <span>{additionalLabel}</span>
          </div>

          <select
            {...field}
            className="relative flex flex-col bg-gray-50 border border-gray-300 shadow-md text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-pointer appearance-none">
            <option className="text-gray-300 text-sm" value="" disabled>
              Select your level
            </option>
            {options.map((option) => (
              <option value={option.value} key={option.value} className="hover:bg-blue-100">
                {option.label}
              </option>
            ))}
          </select>
        </label>
      )}
    />
  );
};
