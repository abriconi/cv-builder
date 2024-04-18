import { useFormContext, useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../../helpers/constants";
import { CustomTextarea } from "../../../../shared-components/CustomTextarea";
import { Accordion } from "../../../../shared-components/Accordion";
import { dateFormatter } from "../../../../helpers";
import { IconButtonDelete } from "../../../../shared-components/Buttons/Buttons";

interface ItemProps {
  index: number;
  handleDelete: () => void;
}

export const ExperienceItem: React.FC<ItemProps> = ({ index, handleDelete }: ItemProps) => {
  const experienceTitle = useWatch({
    name: `experience.${index}.title`,
  });
  const company = useWatch({
    name: `experience.${index}.companyName`,
  });
  const startDate = useWatch({
    name: `experience.${index}.startDate`,
  });
  const endDate = useWatch({
    name: `experience.${index}.endDate`,
  });

  const startDateFormatted = dateFormatter(startDate);
  const endDateFormatted = dateFormatter(endDate);
  const description = startDateFormatted && endDateFormatted ? `${startDateFormatted} - ${endDateFormatted} at ${company}` : "";
  const status = experienceTitle ? false : true;
  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={experienceTitle} description={description} status={status}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <CustomInput name={`experience.${index}.title`} label={CV_FIELDS.jobTitle} rules={{ required: true }} />
            <CustomInput name={`experience.${index}.companyName`} label={CV_FIELDS.companyName} rules={{ required: true }} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomInput name={`experience.${index}.startDate`} type="month" label={CV_FIELDS.startDate} rules={{ required: true }} />
            <CustomInput name={`experience.${index}.endDate`} type="month" label={CV_FIELDS.endDate} rules={{ required: true }} />
            <CustomInput name={`experience.${index}.location`} label={CV_FIELDS.location} />
          </div>
          <CustomTextarea name={`experience.${index}.description`} label={CV_FIELDS.description} />
        </div>
      </Accordion>
      <IconButtonDelete onClick={handleDelete} />
    </div>
  );
};
