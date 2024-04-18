import { RegisterOptions, useController } from "react-hook-form";
import { LanguageLevels } from "../types";

interface SelectProps {
  name: string;
  options: LanguageLevels;
  rules?: RegisterOptions;
  label: string;
  additionalLabel?: string;
}

export const CustomSelect: React.FC<SelectProps> = ({ name, options, rules, label, additionalLabel = "" }: SelectProps) => {
  const { field, fieldState } = useController({ name, rules });
  return (
    <label className="w-full flex flex-col">
      <div className="flex flex-row justify-between">
        <span>{label}</span>
        <span>{additionalLabel}</span>
      </div>

      <select
        {...field}
        className="flex flex-row bg-gray-50 border border-gray-300 shadow-md text-sm rounded-lg w-full h-14 p-2.5 cursor-pointer appearance-none">
        <option className="text-gray-300 text-sm" value="" disabled>
          Select your level
        </option>
        {Object.values(options).map((option) => (
          <option value={option} key={option} className="hover:bg-blue-100">
            {option}
          </option>
        ))}
      </select>
      {fieldState.error && <p style={{ color: "red" }}>This field is required</p>}
    </label>
  );
};
