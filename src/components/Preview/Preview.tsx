import { useEffect, useRef } from "react";
import { Settings } from "./Settings/Settings";
import { Routes } from "../../helpers/routes";

export const Preview = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const storedUserData = localStorage.getItem("user");
    const storedUserPhoto = localStorage.getItem("userPhoto");

    if (storedUserData) {
      if (iframeRef.current) {
        setTimeout(() => {
          iframeRef?.current?.contentWindow?.postMessage({
            type: "custom-message-type",
            data: JSON.parse(storedUserData),
            photo: storedUserPhoto,
          });
        }, 1000);
      }
    }
  }, []);

  const handlePrint = () => console.log("print");

  return (
    <div className="bg-gray-600 w-screen flex flex-col gap-5 py-10 px-10">
      <Settings handlePrint={handlePrint} />
      <div className="flex h-full w-full">
        <iframe title="CV Preview" ref={iframeRef} src={Routes.Vertex} className="flex h-full w-full" />
      </div>
    </div>
  );
};
