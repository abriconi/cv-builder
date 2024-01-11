import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../constants";

interface ItemProps {
  item: any;
  index: number;
}
export const SocialItem: React.FC<ItemProps> = ({ item, index }: ItemProps) => {
  const { control, reset, trigger, setError } = useFormContext();
  return (
    <div className="flex flex-col sm:flex-row md:flex-row gap-4">
      <CustomInput
        key={`${item.id}-label`}
        name={`social.${index}.label`}
        control={control}
        type="text"
        placeholder={CV_FIELDS.socialNet}
      />
      <CustomInput key={`${item.id}-link`} name={`social.${index}.link`} control={control} type="text" placeholder={CV_FIELDS.link} />
      <hr className="h-0.5" />
    </div>
  );
};
