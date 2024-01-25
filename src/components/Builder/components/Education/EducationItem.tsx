import { useFormContext, useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS, HEADING } from "../../../../constants";
import { CustomTextarea } from "../../../../shared-components/CustomTextarea";
import { Accordion } from "../../../../shared-components/Accordion";
import { dateFormatter } from "../../../../helpers";
import { IconButtonDelete } from "../../../../shared-components/Buttons";

interface ItemProps {
  index: number;
  handleDelete: (index: number) => void;
  handleMove: (dragIndex: number, hoverIndex: number) => void;
}

export const EducationItem: React.FC<ItemProps> = ({ index, handleDelete, handleMove }: ItemProps) => {
  const { control } = useFormContext();
  const school = useWatch({
    name: `education.${index}.school`,
    control,
  });
  const startDate = useWatch({
    name: `education.${index}.startDate`,
    control,
  });
  const endDate = useWatch({
    name: `education.${index}.endDate`,
    control,
  });
  const title = school || HEADING.notSpecified;
  const startDateFormatted = dateFormatter(startDate);
  const endDateFormatted = dateFormatter(endDate);
  const description = startDateFormatted && endDateFormatted ? `${startDateFormatted} - ${endDateFormatted}` : "";

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={title} description={description} status={false}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">
            <CustomInput name={`education.${index}.school`} control={control} type="text" label={CV_FIELDS.school} />
            <CustomInput name={`education.${index}.degree`} control={control} type="text" label={CV_FIELDS.degree} />
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">
            <CustomInput name={`education.${index}.startDate`} control={control} type="month" label={CV_FIELDS.startDate} />
            <CustomInput name={`education.${index}.endDate`} control={control} type="month" label={CV_FIELDS.endDate} />
            <CustomInput name={`education.${index}.location`} control={control} type="text" label={CV_FIELDS.location} />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-gray-400 text-sm">{CV_FIELDS.description}</p>
            <CustomTextarea name={`education.${index}.description`} control={control} label={CV_FIELDS.description} />
          </div>
          <hr className="h-0.5" />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
