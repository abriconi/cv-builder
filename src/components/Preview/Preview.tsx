import React, { useEffect, useRef, useState } from "react";
import { Button } from "../../shared-components/Buttons/Buttons";
import { ColorSelector } from "../../shared-components/ColorSelector/ColorSelector";
import { ColorPalette } from "../../types";
import { useTemplateContext } from "../../context/TemplateContext";

interface Props {
  showTemplates: boolean;
  setShowTemplates: (val: boolean) => void;
}

export const Preview: React.FC<Props> = ({ showTemplates, setShowTemplates }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [palette, setPalette] = useState<ColorPalette[] | []>([]);
  const [color, setColor] = useState<ColorPalette>(palette[0]);
  const { template } = useTemplateContext();

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
  }, [template.route]);

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

  return (
    <>
      <div className="flex flex-row justify-between gap-2">
        <Button name={showTemplates ? "Back to editor" : "Choose template"} onClick={() => setShowTemplates(!showTemplates)} />
        {palette && <ColorSelector colors={palette} setColor={setColor} />}
        <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
      </div>
      <div className="grow">
        <iframe title="CV Preview" ref={iframeRef} src={template.route} className=" w-full h-full" />
      </div>
    </>
  );
};
