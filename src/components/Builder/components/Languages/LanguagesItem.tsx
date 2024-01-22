import { useFormContext, useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CV_FIELDS, HEADING, LANGUAGE_LEVELS } from "../../../../constants";
import { CustomSelect } from "../../../../shared-components/CustomSelect";
import { Accordion } from "../../../../shared-components/Accordion";
import { IconButtonDelete } from "../../../../shared-components/Buttons";

interface ItemProps {
  index: number;
  handleDelete: (index: number) => void;
}
export const LanguagesItem: React.FC<ItemProps> = ({ index, handleDelete }: ItemProps) => {
  const { control } = useFormContext();
  const language = useWatch({
    name: `languages.${index}.language`,
    control,
  });
  const level = useWatch({
    name: `languages.${index}.level`,
    control,
  });

  const title = language || HEADING.notSpecified;
  const status = title === HEADING.notSpecified ? true : false;

  return (
    <div className="flex flex-row gap-3 text-gray-500 hover:text-blue-500">
      <Accordion title={title} description={level} status={status}>
        <div className="flex flex-col gap-4 sm:flex-row md:flex-row">
          <CustomInput name={`languages.${index}.language`} control={control} type="text" label={CV_FIELDS.languages} />
          <CustomSelect name={`languages.${index}.level`} control={control} options={LANGUAGE_LEVELS} label="Level" />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
