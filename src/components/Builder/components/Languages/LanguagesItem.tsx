import { useWatch } from "react-hook-form";
import { CustomInput } from "../../../../shared-components/CustomInput";
import { CustomSelect } from "../../../../shared-components/CustomSelect";
import { Accordion } from "../../../../shared-components/Accordion";
import { IconButtonDelete } from "../../../../shared-components/Buttons/Buttons";
import React from "react";
import { CV_FIELDS, LANGUAGE_LEVELS } from "../../../../helpers/enums";

interface Props {
  index: number;
  handleDelete: (index: number) => void;
}

export const LanguagesItem: React.FC<Props> = ({ index, handleDelete }) => {
  const language = useWatch({
    name: `languages.${index}.language`,
  });
  const level = useWatch({
    name: `languages.${index}.level`,
  });

  const status = language ? false : true;
  return (
    <div className={`flex flex-row gap-3 text-gray-500 hover:text-blue-500`}>
      <Accordion title={language} description={level} status={status}>
        <div className="flex flex-row items-center gap-4 h-full">
          <CustomInput name={`languages.${index}.language`} label={CV_FIELDS.languages} rules={{ required: true }} />
          <CustomSelect name={`languages.${index}.level`} options={LANGUAGE_LEVELS} label={CV_FIELDS.level} rules={{ required: true }} />
        </div>
      </Accordion>
      <IconButtonDelete onClick={() => handleDelete(index)} />
    </div>
  );
};
