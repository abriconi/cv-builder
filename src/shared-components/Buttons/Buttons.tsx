import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

interface Props {
  onClick: () => void;
  name: string;
  aligning?: string;
}

interface IconProps {
  onClick?: () => void;
  icon: IconDefinition;
}

export const Button: React.FC<Props> = ({ onClick, name, aligning = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${aligning} min-w-[170px] rounded font-semibold bg-transparent text-blue-500 py-2 border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent`}>
      {name}
    </button>
  );
};

export const ButtonText: React.FC<Props> = ({ onClick, name, aligning = "self-start" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${aligning} box-border py-2 px-3 bg-transparent text-blue-500 font-semibold hover:bg-blue-50 hover:rounded-lg`}>
      {name}
    </button>
  );
};

export const ButtonIcon: React.FC<IconProps> = ({ onClick, icon }) => {
  return (
    <button onClick={onClick} type="button" className="flex px-2 items-center justify-center box-content">
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
