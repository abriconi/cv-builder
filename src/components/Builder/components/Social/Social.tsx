import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { SocialItem } from "./SocialItem";
import { SocialType } from "../../../../types";

export const Social = () => {
  const { control } = useFormContext();
  const {
    fields,
    append,
    remove: removeParameters,
    move,
  } = useFieldArray({
    name: "social",
    control,
  });
  const social = fields as unknown as SocialType[];
  const handleAddClick = () => append({ label: "", link: "" });
  const handleMove = (dragIndex: number, hoverIndex: number): void => {
    move(dragIndex, hoverIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Websites & Social Links</h1>
      <>
        {social.map((item, index) => (
          <SocialItem index={index} key={index} handleDelete={removeParameters} handleMove={handleMove} />
        ))}
      </>
      <ButtonText onClick={handleAddClick} name="+ Add one more link" />
    </div>
  );
};
