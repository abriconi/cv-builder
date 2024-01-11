interface ButtonType {
  onClick: () => void;
  name: string;
  aligning?: string;
}
export const Button: React.FC<ButtonType> = ({ onClick, name, aligning = "" }: ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${aligning} self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-10 border border-blue-500 hover:border-transparent rounded`}>
      {name}
    </button>
  );
};
export const ButtonText: React.FC<ButtonType> = ({ onClick, name, aligning = "" }: ButtonType) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${aligning} py-2 bg-transparent hover:bg-gray-50 hover:border-gray-300 hover:border hover:shadow-md hover:rounded-lg text-blue-700 font-semibold`}>
      {name}
    </button>
  );
};
