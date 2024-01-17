import { useFieldArray, useFormContext } from "react-hook-form";
import { ButtonText } from "../../../../shared-components/Buttons";
import { SkillsItem } from "./SkillsItem";
import { SKILL_LEVELS } from "../../../../constants";

export const Skills = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "skills",
    control,
  });

  const handleAddClick = () => append({ skill: "", level: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Skills</h1>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <SkillsItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <ButtonText onClick={handleAddClick} name="+ Add one more skill" />
    </div>
  );
};
