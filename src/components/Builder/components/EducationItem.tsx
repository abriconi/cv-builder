import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../constants";
import { CustomTextarea } from "../../../shared-components/CustomTextarea";

interface ItemProps {
  item: any;
  index: number;
}
export const EducationItem: React.FC<ItemProps> = ({ item, index }: ItemProps) => {
  const { control, reset, trigger, setError } = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput
          key={`${item.id}-school`}
          name={`education.${index}.school`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.school}
        />
        <CustomInput
          key={`${item.id}-degree`}
          name={`education.${index}.degree`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.degree}
        />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput
          key={`${item.id}-startDate`}
          name={`education.${index}.startDate`}
          control={control}
          type="date"
          placeholder={CV_FIELDS.startDate}
        />
        <CustomInput
          key={`${item.id}-endDate`}
          name={`education.${index}.endDate`}
          control={control}
          type="date"
          placeholder={CV_FIELDS.endDate}
        />

        <CustomInput
          key={`${item.id}-location`}
          name={`education.${index}.location`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.location}
        />
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <p className="text-gray-400 text-sm">{CV_FIELDS.description}</p>
        <CustomTextarea key={`${item.id}-description`} name={`education.${index}.description`} control={control} />
      </div>
      <hr className="h-0.5" />
    </div>
  );
};
