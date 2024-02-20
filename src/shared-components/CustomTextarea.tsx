import { Controller, RegisterOptions } from "react-hook-form";

interface TextareaProps {
  name: string;
  control: any;
  label: string;
  rules?: RegisterOptions;
}

export const CustomTextarea: React.FC<TextareaProps> = ({ name, control, label, rules }: TextareaProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <label>
          {label}
          <textarea
            {...field}
            className="bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-28 p-2.5"
          />
        </label>
      )}
    />
  );
};
