import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../../constants";
import { CustomRange } from "../../../../shared-components/CusstomRange";

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
          label={CV_FIELDS.skill}
          rules={{ required: true }}
        />
        <CustomRange
          key={`${item.id}-level`}
          name={`skills.${index}.level`}
          control={control}
          rules={{ required: true }}
          id={`${item.id}-level`}
        />
      </div>
      <hr className="h-0.5" />
    </div>
  );
};
