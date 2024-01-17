interface ButtonType {
  onClick?: () => void;
  name: string;
  aligning?: string;
  type?: "button" | "submit";
}
export const Button: React.FC<ButtonType> = ({ onClick, name, aligning = "", type = "button" }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${aligning} bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded`}>
      {name}
    </button>
  );
};
export const ButtonText: React.FC<ButtonType> = ({ onClick, name, aligning = "self-start", type = "button" }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${aligning} py-2 px-3 bg-transparent hover:bg-gray-50 hover:border-gray-300 hover:border hover:shadow-md hover:rounded-lg text-blue-500 font-semibold`}>
      {name}
    </button>
  );
};
