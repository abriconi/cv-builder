import { TemplateType } from "../types";

interface ColorSelectorProps {
  template: TemplateType | undefined;
}

export const ColorSelector: React.FC<ColorSelectorProps> = ({ template }: ColorSelectorProps) => {
  const root = document.documentElement;

  if (template) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].primary_shade);
  }

  const handleClick = (primary: string, primaryShade: string) => {
    root.style.setProperty("--primary-color", primary);
    root.style.setProperty("--primary-shade", primaryShade);
  };
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <p className="text-white">Choose color</p>
      <div className="flex flex-row gap-2 h-11 items-center ">
        {template?.colors.map((color) => (
          <button
            key={color.color_name}
            className={"rounded-full w-9 h-9 cursor-pointer hover:w-10 hover:h-10"}
            onClick={() => handleClick(color.primary, color.primary_shade)}
            style={{ backgroundColor: color.primary }}
          />
        ))}
      </div>
    </div>
  );
};
