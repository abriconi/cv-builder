import { RegisterOptions, useController } from "react-hook-form";
import { CV_FIELDS } from "../helpers/constants";

interface InputProps {
  name: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  rules?: RegisterOptions;
}
export const CustomInputNew: React.FC<InputProps> = ({ name, type = "text", rules, label }: InputProps) => {
  const { field, fieldState } = useController({ name, rules });
  return (
    <label className="text-gray w-full">
      {label}
      <input
        {...field}
        type={type}
        className="bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5"
      />
      {fieldState.error && <p style={{ color: "red" }}>This field is required</p>}
    </label>
  );
};
