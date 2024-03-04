import { useEffect, useRef, useState } from "react";
import { Routes } from "../../helpers/routes";
import { TEMPLATES } from "../../helpers/constants";
import { Button } from "../../shared-components/Buttons";

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [selectedTemplateRoute, setSelectedTemplateRoute] = useState(Routes.Vertex);
  const template = TEMPLATES.find((template) => selectedTemplateRoute === template.route);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    const storedUserPhoto = localStorage.getItem("userPhoto");

    if (storedUserData) {
      if (iframeRef.current) {
        setTimeout(() => {
          iframeRef?.current?.contentWindow?.postMessage({
            type: "custom-message-type",
            data: JSON.parse(storedUserData),
            photo: storedUserPhoto,
          });
        }, 500);
      }
    }
  }, [selectedTemplateRoute]);

  const handlePrint = () => console.log("print");

  return (
    <>
      <div className="flex flex-row justify-between">
        {TEMPLATES.map((template) => (
          <div className="flex flex-row gap-1 items-center" key={template.name}>
            <input
              type="radio"
              id={template.route}
              name="template"
              value={template.route}
              onChange={() => setSelectedTemplateRoute(template.route as Routes)}
              checked={template.route === selectedTemplateRoute}
            />
            <label htmlFor={template.route}>{template.name}</label>
          </div>
        ))}

        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>

      <div className="grow">
        <iframe title="CV Preview" ref={iframeRef} src={selectedTemplateRoute} className="h-full w-full" />
      </div>
    </>
  );
};
