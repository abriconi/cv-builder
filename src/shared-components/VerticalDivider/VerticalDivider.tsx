import { ReactNode } from "react";
import style from "./style.module.css";
import clsx from "clsx";

interface Props {
  children: ReactNode;
}

export const VerticalDivider: React.FC<Props> = ({ children }) => {
  return <div className={clsx(style.divider, "flex flex-row")}>{children}</div>;
};
