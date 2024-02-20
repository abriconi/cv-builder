import { useRef } from "react";
import { Settings } from "./Settings/Settings";
import { Vertex } from "./Templates/Vertex/Vertex";
import { useReactToPrint } from "react-to-print";

export const Preview = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : undefined;
  const userPhoto = localStorage.getItem("userPhoto") || undefined;

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    // content: () => componentRef.current || undefined,
  });
  return userData ? (
    <div className="bg-gray-600 w-screen flex flex-col gap-10 py-10 px-10">
      <Settings onClick={handlePrint} />
      <Vertex img={userPhoto} userData={user} />
    </div>
  ) : null;
};
