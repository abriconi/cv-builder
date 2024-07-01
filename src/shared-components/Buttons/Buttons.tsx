import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useTemplateContext } from "../../context/TemplateContext";

interface ButtonType {
  onClick?: () => void;
  name: string;
  aligning?: string;
  type?: "button" | "submit";
  icon?: JSX.Element;
}

interface IconButtonType {
  onClick?: () => void;
}

export const Button: React.FC<ButtonType> = ({ onClick, name, aligning = "", type = "button", icon }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${aligning} flex flex-row justify-center gap-2 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-5 border border-blue-500 hover:border-transparent rounded`}>
      {icon}
      {name}
    </button>
  );
};

export const ButtonText: React.FC<ButtonType> = ({ onClick, name, aligning = "self-start", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${aligning} box-border py-2 px-3 bg-transparent text-blue-500 font-semibold hover:bg-blue-50 hover:rounded-lg`}>
      {name}
    </button>
  );
};

export const IconButtonDelete: React.FC<IconButtonType> = ({ onClick }) => {
  return (
    <button onClick={onClick} type="button" className="flex px-2 items-center justify-center box-content">
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export const ButtonDeletePhoto = () => {
  const { userPhoto, deleteUserPhoto } = useTemplateContext();

  if (!userPhoto) return null;

  return <ButtonText name="Delete photo" onClick={deleteUserPhoto} aligning="self-center" />;
};
