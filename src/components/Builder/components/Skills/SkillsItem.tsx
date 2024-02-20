import { useFormContext, useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS } from "../../../../constants";
import { CustomRange } from "../../../../shared-components/CustomRange";
import { Accordion } from "../../../../shared-components/Accordion";
import { IconButtonDelete } from "../../../../shared-components/Buttons";

interface ItemProps {
  index: number;
  handleDelete: (index: number) => void;
  handleMove: (dragIndex: number, hoverIndex: number) => void;
}
export const SkillsItem: React.FC<ItemProps> = ({ index, handleDelete, handleMove }: ItemProps) => {
  const { control } = useFormContext();

  const skill = useWatch({
    name: `skills.${index}.skill`,
    control,
  });

  const level = useWatch({
    name: `skills.${index}.level`,
    control,
  });

  const status = skill ? false : true;

  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={skill} description={level} status={status}>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row md:flex-row gap-4">
            <CustomInput name={`skills.${index}.skill`} control={control} type="text" label={CV_FIELDS.skill} rules={{ required: true }} />
            <CustomRange name={`skills.${index}.level`} control={control} id={`${index}-level`} level={level} />
          </div>
          <hr className="h-0.5" />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
