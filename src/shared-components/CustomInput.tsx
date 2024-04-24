import { RegisterOptions, useController } from "react-hook-form";

interface Props {
  name: string;
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  rules?: RegisterOptions;
  control?: any;
  readonly?: boolean;
}

export const CustomInput: React.FC<Props> = ({ name, type = "text", rules, label, readonly = false }: Props) => {
  const { field } = useController({ name, rules });
  return (
    <label className="text-gray w-full">
      {label}
      <input
        {...field}
        type={type}
        readOnly={readonly}
        className="bg-gray-50 border border-gray-300 shadow-md text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 p-2.5"
      />
    </label>
  );
};
