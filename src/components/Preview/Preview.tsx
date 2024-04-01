import { useEffect, useRef, useState } from "react";
import { Button } from "../../shared-components/Buttons/Buttons";
import { Dialog } from "../../shared-components/Dialog";
import { ChooseTemplate } from "../ChooseTemplate/ChooseTemplate";
import { ColorSelector } from "../../shared-components/ColorSelector/ColorSelector";
import { ColorPalette } from "../../types";
import { TemplateRoutes } from "../../helpers/templatesInfo";

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [palette, setPalette] = useState<ColorPalette[] | []>([]);
  const [color, setColor] = useState<ColorPalette>(palette[0]);
  const [templateRoute, setTemplateRoute] = useState<string>(TemplateRoutes.Vertex);

  useEffect(() => {
    window.onmessage = function (event: MessageEvent) {
      const receivedData = event.data;

      if (receivedData.type === "message-to-parent") {
        setPalette(receivedData.colors);
      }
    };
    window.addEventListener("message", window.onmessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    const storedUserPhoto = localStorage.getItem("userPhoto");

    if (storedUserData) {
      if (iframeRef.current) {
        setTimeout(() => {
          iframeRef.current?.contentWindow?.postMessage(
            {
              type: "custom-message-type",
              data: JSON.parse(storedUserData),
              photo: storedUserPhoto,
            },
            "*",
          );
        }, 500);
      }
    }
  }, [templateRoute]);

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;
      if (receivedData.type === "colors-to-parent") {
        setPalette(receivedData.colors);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  useEffect(() => {
    if (color) {
      if (iframeRef.current) {
        setTimeout(() => {
          iframeRef?.current?.contentWindow?.postMessage(
            {
              type: "colors-to-iframe",
              color,
            },
            "*",
          );
        }, 100);
      }
    }
  }, [color]);

  const handlePrint = () => console.log("print");
  const openDialog = () => {
    setIsDialogOpen(true);
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <Button name="Choose template" onClick={openDialog} />
        {palette && <ColorSelector colors={palette} setColor={setColor} />}
        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>
      {isDialogOpen && (
        <Dialog isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <ChooseTemplate setTemplateRoute={setTemplateRoute} />
        </Dialog>
      )}
      <div className="grow">
        <iframe title="CV Preview" ref={iframeRef} src={templateRoute} className=" w-full h-full" />
        {/* <iframe title="CV Preview" ref={iframeRef} src={Routes.Vertex} className="h-full w-full" /> */}
      </div>
    </>
  );
};
