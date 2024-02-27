import { ColorPalette } from "../types";

export const dateFormatter = (date: string | undefined): string => {
  if (date) {
    const parsedDate = new Date(`${date}-01`);
    const formattedDate = new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long" }).format(parsedDate);
    return formattedDate;
  } else {
    return "";
  }
};

export const capitalizeFirstLetter = (str: string | undefined): string => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

export const findColors = (template: string, palette: ColorPalette[]): ColorPalette[] => {
  return palette.filter((color) => color.available_templates.includes(template));
};
