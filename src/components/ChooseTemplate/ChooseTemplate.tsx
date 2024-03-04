import { Dispatch, SetStateAction } from "react";
import { TEMPLATES } from "../../helpers/constants";
import { Routes } from "../../helpers/routes";

interface Props {
  templateRoute: string;
  selectTemplateRoute: Dispatch<SetStateAction<Routes>>;
}

export const ChooseTemplate: React.FC<Props> = ({ templateRoute, selectTemplateRoute }: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Templates</h2>
      {TEMPLATES.map((template) => (
        <div className="flex flex-row gap-1 items-center" key={template.name}>
          <input
            type="radio"
            id={template.route}
            name="template"
            value={template.route}
            onChange={() => selectTemplateRoute(template.route as Routes)}
            checked={template.route === templateRoute}
          />
          <label htmlFor={template.route}>{template.name}</label>
        </div>
      ))}
    </>
  );
};

{
}
