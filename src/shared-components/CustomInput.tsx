import { Controller, RegisterOptions } from "react-hook-form";

interface InputProps {
  name: string;
  control: any;
  type: "number" | "text" | "date" | "email" | "tel";
  rules?: RegisterOptions;
  placeholder: string;
}
export const CustomInput: React.FC<InputProps> = ({ name, control, type, placeholder, rules }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <input
            {...field}
            type={type}
            className="bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder={placeholder}
          />
          {fieldState.error && <p style={{ color: "red" }}>error</p>}
        </>
      )}
    />
  );
};
