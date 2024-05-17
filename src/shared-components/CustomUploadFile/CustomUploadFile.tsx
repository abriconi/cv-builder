import { ButtonText } from "../Buttons/Buttons";
import { useTemplateContext } from "../../context/TemplateContext";
import { UserPhoto } from "./UserPhoto";
import { ButtonDeletePhoto } from "./ButtonDeletePhoto";

export const CustomUploadFile = () => {
  const { updateUserPhoto } = useTemplateContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    updateUserPhoto(selectedFile);
  };

  return (
    <div className="flex flex-row gap-2">
      <label className="flex items-center bg-gray-50 border border-gray-300 shadow-md rounded-lg w-[80px] h-[80px] cursor-pointer flex content-center justify-center">
        <input type="file" onChange={(e) => handleChange(e)} className="hidden" accept="image/png, image/jpeg" size={4000000} />
        <UserPhoto />
      </label>
      <ButtonDeletePhoto />
    </div>
  );
};
