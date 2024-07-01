import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CustomTextarea } from "../../../../shared-components/CustomTextarea";
import { Accordion } from "../../../../shared-components/Accordion";
import { dateFormatter } from "../../../../helpers";
import { IconButtonDelete } from "../../../../shared-components/Buttons/Buttons";
import { CV_FIELDS } from "../../../../helpers/enums";

interface Props {
  index: number;
  handleDelete: (index: number) => void;
}

export const EducationItem: React.FC<Props> = ({ index, handleDelete }) => {
  const school = useWatch({
    name: `education.${index}.school`,
  });
  const startDate = useWatch({
    name: `education.${index}.startDate`,
  });
  const endDate = useWatch({
    name: `education.${index}.endDate`,
  });
  const startDateFormatted = dateFormatter(startDate);
  const endDateFormatted = dateFormatter(endDate);
  const description = startDateFormatted && endDateFormatted ? `${startDateFormatted} - ${endDateFormatted}` : "";
  const status = school ? false : true;

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={school} description={description} status={status}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <CustomInput name={`education.${index}.school`} label={CV_FIELDS.school} rules={{ required: true }} />
            <CustomInput name={`education.${index}.degree`} label={CV_FIELDS.degree} rules={{ required: true }} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomInput name={`education.${index}.startDate`} type="month" label={CV_FIELDS.startDate} rules={{ required: true }} />
            <CustomInput name={`education.${index}.endDate`} type="month" label={CV_FIELDS.endDate} rules={{ required: true }} />
            <CustomInput name={`education.${index}.location`} type="text" label={CV_FIELDS.location} rules={{ required: true }} />
          </div>
          <CustomTextarea name={`education.${index}.description`} label={CV_FIELDS.description} />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
