import React, { useEffect } from "react";
import { Button } from "../../shared-components/Buttons/Buttons";
import { ColorSelector } from "../../shared-components/ColorSelector/ColorSelector";
import { useTemplateContext } from "../../context/TemplateContext";
import styles from "../main-style.module.css";
import clsx from "clsx";

interface Props {
  showTemplates: boolean;
  setShowTemplates: (val: boolean) => void;
}

export const Preview: React.FC<Props> = ({ showTemplates, setShowTemplates }: Props) => {
  const { template, color, setColor, getColorPaletteFromIframe, palette, iframeRef, sendColorToIframe } = useTemplateContext();

  useEffect(() => getColorPaletteFromIframe(), []);
  useEffect(() => sendColorToIframe(color), [color]);

  const handleClick = () => console.log("print");

  return (
    <>
      <div className={clsx("flex flex-row justify-between gap-2", styles.noPrint)}>
        <Button name={showTemplates ? "Back to editor" : "Choose template"} onClick={() => setShowTemplates(!showTemplates)} />
        {palette && <ColorSelector colors={palette} setColor={setColor} />}
        <Button name="Download PDF" aligning="self-start" onClick={handleClick} />
      </div>
      <div className={clsx("grow", styles.print)}>
        <iframe title="CV Preview" ref={iframeRef} src={template.route} className={clsx("w-full h-full")} />
      </div>
    </>
  );
};
