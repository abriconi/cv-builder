import { TEMPLATES } from "../../helpers/constants";
import { Button } from "../../shared-components/Buttons/Buttons";

interface Props {
  setTemplateRoute: (template: string) => void;
}

export const ChooseTemplate: React.FC<Props> = ({ setTemplateRoute }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h2 className="text-xl font-semibold mb-4 self-center">Templates</h2>
      {TEMPLATES.map((template) => (
        <div className="flex flex-row gap-4 items-center" key={template.name}>
          <Button name={template.name} onClick={() => setTemplateRoute(template.route)} />
        </div>
      ))}
    </div>
  );
};

{
}
