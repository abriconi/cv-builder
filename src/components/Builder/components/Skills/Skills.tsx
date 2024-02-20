import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { SkillsItem } from "./SkillsItem";
import { SkillType } from "../../../../types";

export const Skills = () => {
  const { control } = useFormContext();
  const {
    fields,
    append,
    remove: removeParameters,
    move,
  } = useFieldArray({
    name: "skills",
    control,
  });
  const skills = fields as unknown as SkillType[];

  const handleAddClick = () => append({ skill: "", level: "" });
  const handleMove = (dragIndex: number, hoverIndex: number): void => {
    move(dragIndex, hoverIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Skills</h1>
      {Boolean(skills?.length) && (
        <>
          {skills.map((item, index) => (
            <SkillsItem index={index} key={index} handleDelete={removeParameters} handleMove={handleMove} />
          ))}
        </>
      )}
      <ButtonText onClick={handleAddClick} name="+ Add one more skill" />
    </div>
  );
};
