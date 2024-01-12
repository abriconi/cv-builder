import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS, LANGUAGE_LEVELS } from "../../../../constants";
import { CustomSelect } from "../../../../shared-components/CustomSelect";

interface ItemProps {
  item: any;
  index: number;
}
export const SkillsItem: React.FC<ItemProps> = ({ item, index }: ItemProps) => {
  const { control, reset, trigger, setError } = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput
          key={`${item.id}-skill`}
          name={`skills.${index}.skill`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.skill}
          rules={{ required: true }}
        />
        <CustomSelect name={`skills.${index}.level`} control={control} options={LANGUAGE_LEVELS} rules={{ required: true }} />
      </div>
      <hr className="h-0.5" />
    </div>
  );
};
