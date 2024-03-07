import { Dispatch, SetStateAction } from "react";
import { TEMPLATES } from "../../helpers/constants";
import { Routes } from "../../helpers/routes";
import { ColorSelector } from "../../shared-components/ColorSelector";
import { Button } from "../../shared-components/Buttons";

interface Props {
  selectTemplateRoute: Dispatch<SetStateAction<Routes>>;
}

export const ChooseTemplate: React.FC<Props> = ({ selectTemplateRoute }: Props) => {
  return (
    <div className="flex flex-col gap-4 p-5">
      <h2 className="text-xl font-semibold mb-4 self-center">Templates</h2>
      {TEMPLATES.map((template) => (
        <div className="flex flex-row gap-4 items-center" key={template.name}>
          <Button name={template.name} onClick={() => selectTemplateRoute(template.route as Routes)} />
          <ColorSelector template={template} />
        </div>
      ))}
    </div>
  );
};

{
}
