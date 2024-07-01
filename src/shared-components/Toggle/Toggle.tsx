import clsx from "clsx";
import style from "./style.module.css";
import { useController } from "react-hook-form";

interface Props {
  name: string;
  label: string;
}

export const Toggle: React.FC<Props> = ({ name, label }) => {
  const { field } = useController({ name });

  return (
    <div className={clsx(style.toggleWrapper)}>
      <p className={clsx(style.toggleDescription)}>{label}</p>
      <div className={clsx(style.toggleSwitch)}>
        <input {...field} className={clsx(style.toggleInput)} id={name} type="checkbox" />
        <label className={clsx(style.toggleLabel)} htmlFor={name}></label>
      </div>
    </div>
  );
};
