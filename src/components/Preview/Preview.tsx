import React, { useEffect } from "react";
import { Button } from "../../shared-components/Buttons/Buttons";
import { ColorSelector } from "../../shared-components/ColorSelector/ColorSelector";
import { useTemplateContext } from "../../context/TemplateContext";
import { MESSAGE_TYPE } from "../../helpers/constants";

interface Props {
  showTemplates: boolean;
  setShowTemplates: (val: boolean) => void;
}

export const Preview: React.FC<Props> = ({ showTemplates, setShowTemplates }: Props) => {
  const { template, color, setColor } = useTemplateContext();

  const { iframeRef, sendColorsToIframe, palette, setPalette } = useTemplateContext();

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;
      if (receivedData.type === MESSAGE_TYPE.colorsToParent) {
        setPalette(receivedData.colors);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  useEffect(() => sendColorsToIframe(color), [color]);

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
