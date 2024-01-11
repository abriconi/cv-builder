import { ExperienceItemType } from "../../../types";
import { useFormContext } from "react-hook-form";
import { CustomInput } from "../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../constants";
import { CustomTextarea } from "../../../shared-components/CustomTextarea";

interface ItemProps {
  item: any;
  index: number;
}
export const ExperienceItem: React.FC<ItemProps> = ({ item, index }: ItemProps) => {
  const { control, reset, trigger, setError } = useFormContext();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput
          key={`${item.id}-title`}
          name={`experience.${index}.title`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.jobTitle}
        />
        <CustomInput
          key={`${item.id}-companyName`}
          name={`experience.${index}.companyName`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.companyName}
        />
      </div>
      <div className="flex flex-col sm:flex-row md:flex-row gap-4">
        <CustomInput
          key={`${item.id}-startDate`}
          name={`experience.${index}.startDate`}
          control={control}
          type="date"
          placeholder={CV_FIELDS.startDate}
        />
        <CustomInput
          key={`${item.id}-endDate`}
          name={`experience.${index}.endDate`}
          control={control}
          type="date"
          placeholder={CV_FIELDS.endDate}
        />

        <CustomInput
          key={`${item.id}-location`}
          name={`experience.${index}.location`}
          control={control}
          type="text"
          placeholder={CV_FIELDS.location}
        />
      </div>
      <div className="flex flex-col gap-2 pb-2">
        <p className="text-gray-400 text-sm">{CV_FIELDS.description}</p>
        <CustomTextarea key={`${item.id}-description`} name={`experience.${index}.description`} control={control} />
      </div>
      <hr className="h-0.5" />
    </div>
  );
};
