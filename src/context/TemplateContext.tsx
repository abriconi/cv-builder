import { createContext, useState, useContext, Dispatch, SetStateAction, useRef, PropsWithChildren, useEffect } from "react";
import { TEMPLATES, hostRoute } from "../helpers/templatesInfo";
import { ColorPalette, CvType, TemplateType } from "../types";
import { defaultUserData } from "../helpers/constants";
import { toBase64, updateTemplateImages } from "../helpers";
import { MESSAGE_TYPE } from "../helpers/enums";

type TemplateContextType = {
  templates: TemplateType[];
  chosenTemplate: TemplateType;
  setChosenTemplate: (template: TemplateType) => void;
  userData: CvType;
  updateUserData: (cvData: CvType) => void;
  iframeRef: React.RefObject<HTMLIFrameElement> | null;
  palette: ColorPalette[] | [];
  setColor: Dispatch<SetStateAction<ColorPalette | null>>;
  userPhoto: string | null;
  updateUserPhoto: (file: File | undefined) => void;
  deleteUserPhoto: () => void;
  handlePrint: () => void;
};

const TemplateContext = createContext<TemplateContextType>({
  templates: TEMPLATES,
  chosenTemplate: TEMPLATES[0],
  setChosenTemplate: () => {},
  updateUserData: () => {},
  userData: defaultUserData,
  iframeRef: null,
  palette: [],
  setColor: () => {},
  userPhoto: null,
  updateUserPhoto: () => {},
  deleteUserPhoto: () => {},
  handlePrint: () => {},
});

export const TemplateProvider = ({ children }: PropsWithChildren) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [templates, setTemplates] = useState<TemplateType[]>(TEMPLATES);
  const [chosenTemplate, setChosenTemplate] = useState<TemplateType>(TEMPLATES[0]);
  const storedUserData = localStorage.getItem("user");
  const storedUserPhoto = localStorage.getItem("userPhoto");
  const [userData, setUserData] = useState<CvType>(storedUserData ? JSON.parse(storedUserData) : defaultUserData);
  const [palette, setPalette] = useState<ColorPalette[] | []>([]);
  const [color, setColor] = useState<ColorPalette | null>(null);
  const [userPhoto, setUserPhoto] = useState<string | null>(storedUserPhoto || null);

  useEffect(() => receiveDataFromIframe(), []);
  useEffect(() => handleColorChange(palette), [color, palette]);

  const updateUserData = (cvData: CvType) => {
    localStorage.setItem("user", JSON.stringify(cvData));
    setUserData(cvData);
    sendUserDataToIframe(cvData);
  };

  const updateUserPhoto = async (file: File | undefined) => {
    if (!file) {
      throw new Error("Can't update photo without file");
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
          handleColorChange(receivedData.colors);
          break;

        case MESSAGE_TYPE.screenshotsToParent:
          const updatedTemplates = updateTemplateImages(TEMPLATES, receivedData.screenshots, hostRoute);
          setTemplates(updatedTemplates);
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

  const sendUserDataToIframe = (userData: CvType) => {
    iframeRef.current?.contentWindow?.postMessage(
      {
        type: MESSAGE_TYPE.userDataFromParentToIframe,
        data: userData,
      },
      "*",
    );
  };

  const handleColorChange = (receivedPalette: ColorPalette[] | null) => {
    if (!palette.length && receivedPalette) {
      setPalette(receivedPalette);
      setColor(receivedPalette[0]);
      sendColorToIframe(receivedPalette[0]);
    } else if (palette.length && color) {
      sendColorToIframe(color);
    } else if (palette.length && !receivedPalette) return;
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
        templates,
        chosenTemplate,
        setChosenTemplate,
        userData,
        updateUserData,
        iframeRef,
        palette,
        setColor,
        userPhoto,
        updateUserPhoto,
        deleteUserPhoto,
        handlePrint,
      }}>
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplateContext = () => {
  return useContext(TemplateContext);
};
