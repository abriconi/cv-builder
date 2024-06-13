import { useFieldArray } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { LanguagesItem } from "./LanguagesItem";
import { LanguagesType } from "../../../../types";

export const Languages = () => {
  const {
    fields,
    append,
    remove: removeParameters,
  } = useFieldArray({
    name: "languages",
  });
  const languages = fields as unknown as LanguagesType[];
  const handleAddClick = () => append({ language: "", level: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Languages</h1>
      {Boolean(fields?.length) &&
        languages.map((lang, index) => <LanguagesItem index={index} key={index} handleDelete={removeParameters} />)}
      <ButtonText onClick={handleAddClick} name="+ Add one more language" />
    </div>
  );
};
