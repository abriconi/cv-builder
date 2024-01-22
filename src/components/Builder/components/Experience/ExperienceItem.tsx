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
}
export const ExperienceItem: React.FC<ItemProps> = ({ index, handleDelete }: ItemProps) => {
  const { control } = useFormContext();

  const experienceTitle = useWatch({
    name: `experience.${index}.title`,
    control,
  });
  const company = useWatch({
    name: `experience.${index}.companyName`,
    control,
  });
  const startDate = useWatch({
    name: `experience.${index}.startDate`,
    control,
  });
  const endDate = useWatch({
    name: `experience.${index}.endDate`,
    control,
  });

  const title = experienceTitle || HEADING.notSpecified;
  const startDateFormatted = dateFormatter(startDate);
  const endDateFormatted = dateFormatter(endDate);
  const description = `${startDateFormatted} - ${endDateFormatted} at ${company}`;
  const status = title === HEADING.notSpecified ? true : false;

  return (
    <div className="flex flex-row gap-3 text-gray-500 hover:text-blue-500">
      <Accordion title={title} description={description} status={status}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">
            <CustomInput name={`experience.${index}.title`} control={control} type="text" label={CV_FIELDS.jobTitle} />
            <CustomInput name={`experience.${index}.companyName`} control={control} type="text" label={CV_FIELDS.companyName} />
          </div>
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">
            <CustomInput name={`experience.${index}.startDate`} control={control} type="month" label={CV_FIELDS.startDate} />
            <CustomInput name={`experience.${index}.endDate`} control={control} type="month" label={CV_FIELDS.endDate} />
            <CustomInput name={`experience.${index}.location`} control={control} type="text" label={CV_FIELDS.location} />
          </div>
          <div className="flex flex-col gap-2 pb-2">
            <p className="text-gray-400 text-sm">{CV_FIELDS.description}</p>
            <CustomTextarea name={`experience.${index}.description`} control={control} label={CV_FIELDS.description} />
          </div>
          <hr className="h-0.5" />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
