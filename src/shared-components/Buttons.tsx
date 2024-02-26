import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

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

interface ColorButtonType {
  onClick: any;
  color: any;
}

export const Button: React.FC<ButtonType> = ({ onClick, name, aligning = "", type = "button", icon }: ButtonType) => {
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

export const ButtonText: React.FC<ButtonType> = ({ onClick, name, aligning = "self-start", type = "button" }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${aligning} box-border py-2 px-3 bg-transparent hover:bg-gray-50 hover:border-gray-300 hover:border hover:shadow-md hover:rounded-lg text-blue-500 font-semibold`}>
      {name}
    </button>
  );
};

export const IconButtonDelete: React.FC<IconButtonType> = ({ onClick }: IconButtonType) => {
  return (
    <button onClick={onClick} type="button" className="flex px-2 items-center justify-center box-content">
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export const ButtonChooseColor: React.FC<ColorButtonType> = ({ onClick, color }: ColorButtonType) => {
  return <button className={`bg-${color} rounded-full w-10 h-10 cursor-pointer hover:w-11 hover:h-11`} onClick={onClick} />;
};
