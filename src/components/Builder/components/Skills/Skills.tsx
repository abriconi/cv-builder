import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { SkillsItem } from "./SkillsItem";
import { SkillType } from "../../../../types";

export const Skills = () => {
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
    name: "skills",
    control,
  });
  const skills = fields as unknown as SkillType[];
  const handleAddClick = () => append({ skill: "", level: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Skills</h1>
      <>
        {skills.map((item, index) => (
          <SkillsItem index={index} key={index} handleDelete={removeParameters} />
        ))}
      </>
      <ButtonText onClick={handleAddClick} name="+ Add one more skill" />
    </div>
  );
};
