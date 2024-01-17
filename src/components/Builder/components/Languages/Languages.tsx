import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { LanguagesItem } from "./LanguagesItem";

export const Languages = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "languages",
    control,
  });

  const handleAddClick = () => append({ languages: "", level: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Languages</h1>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <LanguagesItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <ButtonText onClick={handleAddClick} name="+ Add one more languages" />
    </div>
  );
};
