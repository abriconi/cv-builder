import clsx from "clsx";
import { TEMPLATES } from "../../helpers/templatesInfo";
import { Button } from "../../shared-components/Buttons/Buttons";
import style from "./style.module.css";

interface Props {
  setTemplateRoute: (template: string) => void;
}

export const ChooseTemplate: React.FC<Props> = ({ setTemplateRoute }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h2 className="text-xl font-semibold mb-4 self-center">Templates</h2>
      {TEMPLATES.map((template) => (
        <div className="flex flex-col gap-2 items-center" key={template.name} onClick={() => setTemplateRoute(template.route)}>
          <h2 text-xl font-semibold mb-4>
            {template.name}
          </h2>
          <div className={clsx(style.card)}>
            <img src={require(`../../img/${template.img}`)}></img>
          </div>
          {/* <Button name={template.name} onClick={() => setTemplateRoute(template.route)} /> */}
        </div>
      ))}
    </div>
  );
};
