import { Settings } from "./Settings/Settings";
import { Vertex } from "./Templates/Vertex/Vertex";

export const Preview = () => {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : undefined;
  const userPhoto = localStorage.getItem("userPhoto") || undefined;

  const handlePrint = () => console.log("print");

  return userData ? (
    <div className="bg-gray-600 w-screen flex flex-col gap-5 py-10 px-10">
      <Settings handlePrint={handlePrint} />
      <Vertex img={userPhoto} userData={user} />
    </div>
  ) : null;
};
