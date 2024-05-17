import { useTemplateContext } from "../../context/TemplateContext";
import { ButtonText } from "../Buttons/Buttons";

export const ButtonDeletePhoto = () => {
  const { userPhoto, deleteUserPhoto } = useTemplateContext();

  if (!userPhoto) return null;

  return <ButtonText name="Delete photo" onClick={deleteUserPhoto} aligning="self-center" />;
};
