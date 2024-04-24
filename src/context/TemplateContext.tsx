import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction } from "react";
import { TEMPLATES } from "../helpers/templatesInfo";
import { TemplateType } from "../types";

interface Props {
  children: ReactNode;
}

type TemplateContextType = {
  template: TemplateType;
  setTemplate: Dispatch<SetStateAction<TemplateType>>;
};

const TemplateContext = createContext<TemplateContextType>({
  template: TEMPLATES[0],
  setTemplate: () => {},
});

export const TemplateProvider = ({ children }: Props) => {
  const [template, setTemplate] = useState(TEMPLATES[0]);

  return <TemplateContext.Provider value={{ template, setTemplate }}>{children}</TemplateContext.Provider>;
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
