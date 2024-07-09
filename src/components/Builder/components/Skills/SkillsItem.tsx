import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CustomRange } from "../../../../shared-components/CustomRange";
import { Accordion } from "../../../../shared-components/Accordion";
import { ButtonIcon } from "../../../../shared-components/Buttons/Buttons";
import { CV_FIELDS } from "../../../../helpers/enums";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

interface Props {
  index: number;
  handleDelete: (index: number) => void;
}
export const SkillsItem: React.FC<Props> = ({ index, handleDelete }) => {
  const [skill, level] = useWatch({ name: [`skills.${index}.skill`, `skills.${index}.level`] });

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={skill} description={level} status={!skill}>
        <div className="flex flex-row gap-4 items-start">
          <CustomInput name={`skills.${index}.skill`} label={CV_FIELDS.skill} rules={{ required: true }} />
          <CustomRange name={`skills.${index}.level`} id={`${index}-level`} level={level} />
        </div>
      </Accordion>
      <ButtonIcon onClick={() => handleDelete(index)} icon={faTrashCan} />
    </div>
  );
};
