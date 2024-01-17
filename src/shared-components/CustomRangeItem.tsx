interface ItemProps {
  color: string;
  selectLevel: () => void;
  levelValue: string;
  levelColor: string;
  field: any;
  id: string;
}
export const CustomRangeItem: React.FC<ItemProps> = ({ color, selectLevel, levelValue, levelColor, field, id }: ItemProps) => {
  return (
    <label
      htmlFor={id}
      className={`hover:bg-${color}-300 bg-${
        field.value === levelValue ? levelColor : ""
      }-300 w-1/5 py-5 cursor-pointer rounded-lg flex items-center transition-all duration-300 ease-in-out`}>
      <input {...field} value={levelValue} type="radio" id={id} className="appearance-none" onClick={selectLevel} />
    </label>
  );
};
