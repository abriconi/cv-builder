import { useEffect, useRef, useState } from "react";
import { Routes } from "../../helpers/routes";
import { TEMPLATES } from "../../helpers/constants";
import { Button } from "../../shared-components/Buttons";
import { useNavigate } from "react-router-dom";
import { Dialog } from "../../shared-components/Dialog";
import { ChooseTemplate } from "../ChooseTemplate/ChooseTemplate";

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [templateRoute, setTemplateRoute] = useState(Routes.Vertex);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const template = TEMPLATES.find((template) => templateRoute === template.route);

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
  }, [templateRoute]);

  const handlePrint = () => console.log("print");
  const openDialog = () => {
    setIsDialogOpen(true);
    // navigate(Routes.ChooseTemplatePopUp);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <Button name="Choose template" onClick={openDialog} />
        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>
      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <ChooseTemplate templateRoute={templateRoute} selectTemplateRoute={setTemplateRoute} />
        </Dialog>
      )}
      <div className="grow">
        <iframe title="CV Preview" ref={iframeRef} src={templateRoute} className="h-full w-full" />
      </div>
    </>
  );
};
