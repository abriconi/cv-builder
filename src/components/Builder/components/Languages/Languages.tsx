import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { LanguagesItem } from "./LanguagesItem";
import { LanguagesType } from "../../../../types";

export const Languages = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const {
    fields,
    append,
    prepend,
    remove: removeParameters,
    swap,
    move,
    insert,
  } = useFieldArray({
    name: "languages",
    control,
  });
  const languages = fields as unknown as LanguagesType[];
  const handleAddClick = () => append({ language: "", level: "" });
  const handleMove = (currentIndex: number, targetIndex: number): void => {
    move(currentIndex, targetIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Languages</h1>
      {Boolean(fields?.length) && (
        <>
          {languages.map((item, index) => (
            <LanguagesItem index={index} key={index} handleDelete={removeParameters} />
          ))}
        </>
      )}
      <ButtonText onClick={handleAddClick} name="+ Add one more languages" />
    </div>
  );
};
