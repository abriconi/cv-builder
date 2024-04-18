import clsx from "clsx";
import style from "./style.module.css";

interface Props {
  name: string;
  label: string;
  checked: boolean;
  setChecked: (data: boolean) => void;
}

export const Toggle: React.FC<Props> = ({ name, label, checked, setChecked }: Props) => {
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className={clsx(style.toggleWrapper)}>
      <p className={clsx(style.toggleDescription)}>{label}</p>
      <div className={clsx(style.toggleSwitch)}>
        <input className={clsx(style.toggleInput)} id={name} type="checkbox" checked={checked} onChange={handleChange} />
        <label className={clsx(style.toggleLabel)} htmlFor={name}></label>
      </div>
    </div>
  );
};
