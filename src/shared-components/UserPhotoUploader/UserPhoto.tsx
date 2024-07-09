import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTemplateContext } from "../../context/TemplateContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const UserPhoto = () => {
  const { userPhoto } = useTemplateContext();

  if (userPhoto) {
    return <img src={userPhoto} alt="Uploaded user" className="rounded-lg shadow-md aspect-square" />;
  }
  return <FontAwesomeIcon icon={faUser} color="#ccc" size="2x" />;
};
