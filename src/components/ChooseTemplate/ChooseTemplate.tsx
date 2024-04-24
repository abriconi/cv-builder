import clsx from "clsx";
import { TEMPLATES } from "../../helpers/templatesInfo";
import { TemplateItem } from "./TemplateItem";

interface Props {
  showTemplates: boolean;
}
export const ChooseTemplate: React.FC<Props> = ({ showTemplates }: Props) => {
  return (
    <div
      className={clsx("w-full h-full bg-gray-600 grid grid-cols-2 gap-10 py-10 absolute bottom-0 overflow-y-auto", {
        "left-0 transition-all duration-1000 ease-in-out opacity-100 z-10": showTemplates,
        "left-[-100%] opacity-0 z-0 transition-all duration-1000 ease-in-out": !showTemplates,
      })}>
      {TEMPLATES.map((template) => (
        <TemplateItem templateItem={template} key={template.name} />
      ))}
    </div>
  );
};
