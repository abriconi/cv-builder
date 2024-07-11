import React from "react";
import { Button } from "../../shared-components/Buttons/Buttons";
import { ColorSelector } from "../../shared-components/ColorSelector/ColorSelector";
import { useTemplateContext } from "../../context/TemplateContext";

interface Props {
  showTemplates: boolean;
  setShowTemplates: (val: boolean) => void;
}

export const Preview: React.FC<Props> = ({ showTemplates, setShowTemplates }) => {
  const { chosenTemplate, setColor, palette, iframeRef, handlePrint } = useTemplateContext();

  return (
    <>
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-row justify-between">
          <Button name={showTemplates ? "Back to editor" : "Choose template"} onClick={() => setShowTemplates(!showTemplates)} />
          <Button name="Download PDF" aligning="self-start" onClick={handlePrint} />
        </div>
        {palette && <ColorSelector colors={palette} setColor={setColor} />}
      </div>
      <div className="grow">
        {chosenTemplate && <iframe title="CV Preview" ref={iframeRef} src={chosenTemplate.route} className="w-full h-full" id="iframe" />}
      </div>
    </>
  );
};
