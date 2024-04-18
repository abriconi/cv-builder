import { useFieldArray } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { SocialItem } from "./SocialItem";
import { SocialType } from "../../../../types";

export const Social = () => {
  const {
    fields,
    append,
    remove: removeParameters,
  } = useFieldArray({
    name: "social",
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
