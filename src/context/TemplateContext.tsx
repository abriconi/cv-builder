import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useEffect, useRef, MutableRefObject } from "react";
import { TEMPLATES } from "../helpers/templatesInfo";
import { CvType, TemplateType } from "../types";
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
};

const TemplateContext = createContext<TemplateContextType>({
  template: TEMPLATES[0],
  setTemplate: () => {},
  updateUserData: () => {},
  userData: defaultUserData,
  iframeRef: null,
  handleIframeUpload: () => {},
});

export const TemplateProvider = ({ children, ref }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(ref || null);
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const storedUserData = localStorage.getItem("user");
  const [userData, setUserData] = useState<CvType>(storedUserData ? JSON.parse(storedUserData) : defaultUserData);

  const updateUserData = (cvData: CvType) => {
    localStorage.setItem("user", JSON.stringify(cvData));
    setUserData(cvData);
    sendDataToIframe(cvData, iframeRef);
  };

  const handleIframeUpload = () => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.templateUploaded) {
        sendDataToIframe(userData, iframeRef);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };

  const sendDataToIframe = (userData: CvType, iframeRef: MutableRefObject<HTMLIFrameElement>) => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: MESSAGE_TYPE.userDataFromParentToIframe,
        data: userData,
      },
      "*",
    );
  };

  return (
    <TemplateContext.Provider value={{ template, setTemplate, userData, updateUserData, iframeRef, handleIframeUpload }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
