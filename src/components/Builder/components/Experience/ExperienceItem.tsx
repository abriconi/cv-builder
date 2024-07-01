import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CustomTextarea } from "../../../../shared-components/CustomTextarea";
import { Accordion } from "../../../../shared-components/Accordion";
import { constructDescription } from "../../../../helpers";
import { ButtonIcon } from "../../../../shared-components/Buttons/Buttons";
import { Toggle } from "../../../../shared-components/Toggle/Toggle";
import { CV_FIELDS, HEADING } from "../../../../helpers/enums";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface Props {
  index: number;
  handleDelete: () => void;
}

export const ExperienceItem: React.FC<Props> = ({ index, handleDelete }) => {
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
  const isCurrentWork = useWatch({
    name: `experience.${index}.isCurrentWork`,
  });

  const [isCurrentWork6, endDate6] = useWatch({
    name: [`experience.${index}.isCurrentWork`, `experience.${index}.endDate`],
  });

  const description = constructDescription(startDate, endDate, company, isCurrentWork);

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={experienceTitle} description={description} status={!experienceTitle}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <CustomInput name={`experience.${index}.title`} label={CV_FIELDS.jobTitle} />
            <CustomInput name={`experience.${index}.companyName`} label={CV_FIELDS.companyName} />
          </div>
          <div className="flex flex-row gap-4">
            <CustomInput name={`experience.${index}.startDate`} type="month" label={CV_FIELDS.startDate} />
            <CustomInput name={`experience.${index}.endDate`} type="month" label={CV_FIELDS.endDate} readonly={isCurrentWork} />
            <CustomInput name={`experience.${index}.location`} label={CV_FIELDS.location} />
          </div>
          <Toggle name={`experience.${index}.isCurrentWork`} label={HEADING.currentlyWork} />
          <CustomTextarea name={`experience.${index}.description`} label={CV_FIELDS.description} />
        </div>
      </Accordion>
      <ButtonIcon onClick={handleDelete} icon={faTrashCan} />
    </div>
  );
};
