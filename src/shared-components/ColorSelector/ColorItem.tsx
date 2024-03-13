import clsx from "clsx";
import style from "./style.module.css";
import { ReactNode } from "react";

interface Props {
  onClick: () => void;
  color: string;
  children?: ReactNode;
  chosen?: boolean;
}
export const ButtonColorSelector: React.FC<Props> = ({ onClick, color, children, chosen }: Props) => {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: color }}
      className={clsx({
        [style.item]: !chosen,
        [style.chosen]: chosen,
      })}>
      {children}
    </button>
  );
};
