import clsx from "clsx";
import { TEMPLATES } from "../../helpers/templatesInfo";
import { TemplateItem } from "./TemplateItem";

interface Props {
  setTemplateRoute?: (template: string) => void;
}

export const ChooseTemplate: React.FC<Props> = ({ setTemplateRoute }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-5 bg-gray-600 px-10 py-10">
      {TEMPLATES.map((template) => (
        <TemplateItem template={template} key={template.name} />
      ))}
    </div>
  );
};
