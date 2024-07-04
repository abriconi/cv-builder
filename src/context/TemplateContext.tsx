import { createContext, useState, useContext, Dispatch, SetStateAction, useRef, PropsWithChildren, useEffect } from "react";
import { TEMPLATES } from "../helpers/templatesInfo";
import { ColorPalette, CvType, TemplateType } from "../types";
import { defaultUserData } from "../helpers/constants";
import { toBase64 } from "../helpers";
import { MESSAGE_TYPE } from "../helpers/enums";

type TemplateContextType = {
  template: TemplateType;
  setTemplate: Dispatch<SetStateAction<TemplateType>>;
  userData: CvType;
  updateUserData: (cvData: CvType) => void;
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
  palette: ColorPalette[] | [];
  setColor: Dispatch<SetStateAction<ColorPalette | null>>;
  userPhoto: string | null;
  updateUserPhoto: (file: File | undefined) => void;
  deleteUserPhoto: () => void;
  handlePrint: () => void;
  screenshots: string[];
};

const TemplateContext = createContext<TemplateContextType>({
  template: TEMPLATES[0],
  setTemplate: () => {},
  updateUserData: () => {},
  userData: defaultUserData,
  iframeRef: null,
  palette: [],
  setColor: () => {},
  userPhoto: null,
  updateUserPhoto: () => {},
  deleteUserPhoto: () => {},
  handlePrint: () => {},
  screenshots: [],
});

export const TemplateProvider = ({ children }: PropsWithChildren) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [template, setTemplate] = useState(TEMPLATES[0]);
  const storedUserData = localStorage.getItem("user");
  const storedUserPhoto = localStorage.getItem("userPhoto");
  const [userData, setUserData] = useState<CvType>(storedUserData ? JSON.parse(storedUserData) : defaultUserData);
  const [palette, setPalette] = useState<ColorPalette[] | []>([]);
  const [color, setColor] = useState<ColorPalette | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(storedUserPhoto || null);
  const [screenshots, setScreenshots] = useState<string[] | []>([]);

  useEffect(() => receiveDataFromIframe(), []);
  useEffect(() => sendColorToIframe(color), [color, palette]);

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

  const receiveDataFromIframe = () => {
    const receiveMessage = (event: MessageEvent) => {
      const receivedData = event.data;

      switch (receivedData.type) {
        case MESSAGE_TYPE.templateUploaded:
          sendUserDataToIframe(userData);
          sendUserPhotoToIframe(userPhoto);
          break;

        case MESSAGE_TYPE.colorsToParent:
          setPalette(receivedData.colors);
          saveColor(receivedData.colors);
          sendColorToIframe(color);
          break;

        case MESSAGE_TYPE.screenshotsToParent:
          setScreenshots(receivedData.screenshots);
          break;

        default:
          break;
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  };

  const saveColor = (receivedPalette: ColorPalette[] | null) => {
    if (receivedPalette?.length) {
      setColor(receivedPalette[0]);
    }
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

  const sendColorToIframe = (color: ColorPalette | null) => {
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

  const handlePrint = () => {
    if (iframeRef?.current) {
      iframeRef?.current?.contentWindow?.postMessage(
        {
          type: "print",
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
        palette,
        setColor,
        userPhoto,
        updateUserPhoto,
        deleteUserPhoto,
        handlePrint,
        screenshots,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
