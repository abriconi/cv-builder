import clsx from "clsx";
import { TEMPLATES } from "../../helpers/templatesInfo";
import { TemplateItem } from "./TemplateItem";
import style from "./style.module.css";

interface Props {
  showTemplates: boolean;
  setTemplateRoute?: (template: string) => void;
}

export const ChooseTemplate: React.FC<Props> = ({ setTemplateRoute, showTemplates }: Props) => {
  return (
    <div className={clsx(style.wrapper, showTemplates ? style.moveIntoPlace : style.moveIntoDark)}>
      {TEMPLATES.map((template) => (
        <TemplateItem template={template} key={template.name} />
      ))}
    </div>
  );
};
