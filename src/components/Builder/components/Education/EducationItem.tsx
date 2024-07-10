import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CustomTextarea } from "../../../../shared-components/CustomTextarea";
import { Accordion } from "../../../../shared-components/Accordion";
import { constructDescription, dateFormatter } from "../../../../helpers";
import { ButtonIcon } from "../../../../shared-components/Buttons/Buttons";
import { CV_FIELDS, HEADING } from "../../../../helpers/enums";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Toggle } from "../../../../shared-components/Toggle/Toggle";

interface Props {
  index: number;
  handleDelete: (index: number) => void;
}

export const EducationItem: React.FC<Props> = ({ index, handleDelete }) => {
  const [school, startDate, endDate, isCurrentStudy] = useWatch({
    name: [
      `education.${index}.school`,
      `education.${index}.startDate`,
      `education.${index}.endDate`,
      `education.${index}.endDate`,
      `education.${index}.isCurrentStudy`,
    ],
  });

  const description = constructDescription(startDate, endDate, false, "study");
  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={school} description={description} status={!school}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <CustomInput name={`education.${index}.school`} label={CV_FIELDS.school} rules={{ required: true }} />
            <CustomInput name={`education.${index}.degree`} label={CV_FIELDS.degree} rules={{ required: true }} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomInput name={`education.${index}.startDate`} type="month" label={CV_FIELDS.startDate} rules={{ required: true }} />
            <CustomInput
              name={`education.${index}.endDate`}
              type="month"
              label={CV_FIELDS.endDate}
              rules={{ required: true }}
              readonly={isCurrentStudy}
            />
            <CustomInput name={`education.${index}.location`} type="text" label={CV_FIELDS.location} rules={{ required: true }} />
          </div>
          <Toggle name={`education.${index}.isCurrentStudy`} label={HEADING.currentlyStudy} />
          <CustomTextarea name={`education.${index}.description`} label={CV_FIELDS.description} />
        </div>
      </Accordion>
      <ButtonIcon onClick={() => handleDelete(index)} icon={faTrashCan} />
    </div>
  );
};
