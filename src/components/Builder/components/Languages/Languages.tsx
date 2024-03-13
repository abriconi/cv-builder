import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { LanguagesItem } from "./LanguagesItem";
import { LanguagesTypeWithId } from "../../../../types";

export const Languages = () => {
  const { control } = useFormContext();
  const {
    fields,
    append,
    remove: removeParameters,
    move,
  } = useFieldArray({
    name: "languages",
    control,
  });
  const languages = fields as unknown as LanguagesTypeWithId[];
  const handleAddClick = () => append({ language: "", level: "" });

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    move(dragIndex, hoverIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Languages</h1>
      {Boolean(fields?.length) &&
        languages.map((lang, index) => (
          <LanguagesItem id={lang.id} index={index} key={index} handleDelete={removeParameters} handleMove={moveCard} />
        ))}
      <ButtonText onClick={handleAddClick} name="+ Add one more language" />
    </div>
  );
};
