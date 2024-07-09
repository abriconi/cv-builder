import clsx from "clsx";
import { TemplateItem } from "./TemplateItem";
import { useTemplateContext } from "../../context/TemplateContext";
import { TemplateType } from "../../types";

interface Props {
  showTemplates: boolean;
}
export const ChooseTemplate: React.FC<Props> = ({ showTemplates }) => {
  const { templates, chosenTemplate, setChosenTemplate } = useTemplateContext();

  const handleClick = (template: TemplateType) => setChosenTemplate(template);
  return (
    <div
      className={clsx("w-full h-full bg-gray-600 grid grid-cols-2 gap-5 py-10 absolute bottom-0 overflow-y-auto", {
        "left-0 transition-all duration-1000 ease-in-out opacity-100 z-10": showTemplates,
        "left-[-100%] opacity-0 z-0 transition-all duration-1000 ease-in-out": !showTemplates,
      })}>
      {chosenTemplate &&
        templates.map((templateItem) => (
          <TemplateItem
            templateItem={templateItem}
            key={templateItem.name}
            chosen={templateItem.name === chosenTemplate.name}
            imgURL={templateItem.imgURL}
            handleClick={handleClick}
          />
        ))}
    </div>
  );
};
