import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../shared-components/Buttons";
import { SocialItem } from "./SocialItem";

export const Social = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "social",
    control,
  });

  const handleAddClick = () => append({ label: "", link: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Websites & Social Links</h1>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <SocialItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <ButtonText onClick={handleAddClick} name="+ Add one more link" />
    </div>
  );
};
