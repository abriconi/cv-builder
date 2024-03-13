import clsx from "clsx";
import style from "./style.module.css";

interface Props {
  header: string;
}

export const SectionHeader: React.FC<Props> = ({ header }) => {
  console.log(1, document.documentElement.style.getPropertyValue("--primary-color"));

  return (
    <h2 className={clsx(style.header, "flex flex-row gap-1 items-center uppercase")}>
      <span className={clsx(style.divider)} />
      {header}
      <span className={clsx(style.divider)} />
    </h2>
  );
};
