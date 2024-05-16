import { createContext, useState, useContext, ReactNode, Dispatch, SetStateAction, useRef } from "react";
import { TEMPLATES } from "../helpers/templatesInfo";
import { ColorPalette, CvType, TemplateType } from "../types";
import { MESSAGE_TYPE, defaultUserData } from "../helpers/constants";
import { toBase64 } from "../helpers";

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
  userPhoto: string | null;
  updateUserPhoto: (file: File | undefined) => void;
  deleteUserPhoto: () => void;
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
  userPhoto: null,
  updateUserPhoto: () => {},
  deleteUserPhoto: () => {},
});

export const TemplateProvider = ({ children, ref }: Props) => {
  const iframeRef = useRef<HTMLIFrameElement>(ref || null);
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const storedUserData = localStorage.getItem("user");
  const storedUserPhoto = localStorage.getItem("userPhoto");
  const [userData, setUserData] = useState<CvType>(storedUserData ? JSON.parse(storedUserData) : defaultUserData);
  const [palette, setPalette] = useState<ColorPalette[] | []>(TEMPLATES[0].colors);
  const [color, setColor] = useState<ColorPalette>(palette[0]);
  const [userPhoto, setUserPhoto] = useState<string | null>(storedUserPhoto || null);

  const updateUserData = (cvData: CvType) => {
    localStorage.setItem("user", JSON.stringify(cvData));
    setUserData(cvData);
    sendUserDataToIframe(cvData);
  };

  const updateUserPhoto = async (file: File | undefined) => {
    if (!file) {
      localStorage.removeItem("userPhoto");
      return;
    } else {
      const image = await toBase64(file);
      setUserPhoto(image);
      localStorage.setItem("userPhoto", image);
      sendUserPhotoToIframe(image);
    }
  };

  const deleteUserPhoto = () => {
    localStorage.removeItem("userPhoto");
    setUserPhoto(null);
    sendUserPhotoToIframe(null);
  };

  const handleIframeUpload = () => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;

      if (receivedData.type === MESSAGE_TYPE.templateUploaded) {
        sendUserDataToIframe(userData);
        sendUserPhotoToIframe(userPhoto);
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
        sendColorToIframe(receivedData.colors[0]);
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
          type: MESSAGE_TYPE.chosenColorToIframe,
          color,
        },
        "*",
      );
    }
  };

  const sendUserPhotoToIframe = (photo: string | null) => {
    iframeRef?.current?.contentWindow?.postMessage(
      {
        type: MESSAGE_TYPE.userPhotoToIframe,
        photo,
      },
      "*",
    );
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
        userPhoto,
        updateUserPhoto,
        deleteUserPhoto,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
