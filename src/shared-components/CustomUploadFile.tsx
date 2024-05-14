import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ButtonText } from "./Buttons/Buttons";
import { useTemplateContext } from "../context/TemplateContext";

export const CustomUploadFile = () => {
  const { userPhoto, updateUserPhoto, deleteUserPhoto } = useTemplateContext();

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    updateUserPhoto(selectedFile);
  };

  return (
    <div className="flex flex-row gap-2">
      <label className="w-[80px] h-[80px] cursor-pointer">
        <input type="file" onChange={(e) => handleChange(e)} className="hidden" accept="image/png, image/jpeg" size={4000000} />
        {userPhoto ? (
          <img src={userPhoto} alt="Uploaded user" className="rounded-lg shadow-md aspect-square" />
        ) : (
          <FontAwesomeIcon icon={faUser} color="#ccc" size="2x" />
        )}
      </label>
      {userPhoto && <ButtonText name=" Delete photo" onClick={deleteUserPhoto} aligning="self-center" />}
    </div>
  );
};
