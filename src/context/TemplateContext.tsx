import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect, useRef, MutableRefObject } from "react";
import { TEMPLATES } from "../helpers/templatesInfo";
import { ColorPalette, CvType, TemplateType } from "../types";
import { MESSAGE_TYPE, defaultUserData } from "../helpers/constants";

interface Props {
  children: ReactNode;
  ref?: any;
}

type TemplateContextType = {
  template: TemplateType;
  setTemplate: Dispatch<SetStateAction<TemplateType>>;
  userData: CvType;
  updateUserData: (cvData: CvType) => void;
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
  handleIframeUpload: () => void;
  sendColorToIframe: (color: ColorPalette) => void;
  palette: ColorPalette[] | [];
  color: ColorPalette;
  setColor: Dispatch<SetStateAction<ColorPalette>>;
  getColorPaletteFromIframe: () => void;
};

const TemplateContext = createContext<TemplateContextType>({
  template: TEMPLATES[0],
  setTemplate: () => {},
  updateUserData: () => {},
  userData: defaultUserData,
  iframeRef: null,
  handleIframeUpload: () => {},
  sendColorToIframe: () => {},
  palette: [],
  color: TEMPLATES[0].colors[0],
  setColor: () => {},
  getColorPaletteFromIframe: () => {},
});

export const TemplateProvider = ({ children, ref }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(ref || null);
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const storedUserData = localStorage.getItem("user");
  const [userData, setUserData] = useState<CvType>(storedUserData ? JSON.parse(storedUserData) : defaultUserData);
  const [palette, setPalette] = useState<ColorPalette[] | []>(TEMPLATES[0].colors);
  const [color, setColor] = useState<ColorPalette>(palette[0]);

  const updateUserData = (cvData: CvType) => {
    localStorage.setItem("user", JSON.stringify(cvData));
    setUserData(cvData);
    sendUserDataToIframe(cvData);
  };

  const handleIframeUpload = () => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.templateUploaded) {
        sendUserDataToIframe(userData);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };

  const getColorPaletteFromIframe = () => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;
      if (receivedData.type === MESSAGE_TYPE.colorsToParent) {
        setPalette(receivedData.colors);
        sendColorToIframe(palette[0]);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  };

  const sendUserDataToIframe = (userData: CvType) => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: MESSAGE_TYPE.userDataFromParentToIframe,
        data: userData,
      },
      "*",
    );
  };

  const sendColorToIframe = (color: ColorPalette) => {
    if (color && iframeRef?.current) {
      iframeRef?.current?.contentWindow?.postMessage(
        {
          type: MESSAGE_TYPE.colorsToIframe,
          color,
        },
        "*",
      );
    }
  };

  return (
    <TemplateContext.Provider
      value={{
        template,
        setTemplate,
        userData,
        updateUserData,
        iframeRef,
        handleIframeUpload,
        sendColorToIframe,
        palette,
        color,
        setColor,
        getColorPaletteFromIframe,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
