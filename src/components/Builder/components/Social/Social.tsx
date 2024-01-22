import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { SocialItem } from "./SocialItem";
import { SocialType } from "../../../../types";

export const Social = () => {
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
    name: "social",
    control,
  });
  const social = fields as unknown as SocialType[];
  const handleAddClick = () => append({ label: "", link: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Websites & Social Links</h1>
      <>
        {social.map((item, index) => (
          <SocialItem index={index} key={index} handleDelete={removeParameters} />
        ))}
      </>
      <ButtonText onClick={handleAddClick} name="+ Add one more link" />
    </div>
  );
};
