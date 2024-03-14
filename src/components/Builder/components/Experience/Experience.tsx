import { useFieldArray, useFormContext } from "react-hook-form";
import { ExperienceItem } from "./ExperienceItem";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { LanguagesType } from "../../../../types";

export const Experience = () => {
  const { control } = useFormContext();
  const { append, remove, move, fields } = useFieldArray({
    name: "experience",
    control,
  });
  const experience = fields as unknown as LanguagesType[];
  const handleAddClick = () => append({ title: "", companyName: "", startDate: "", endDate: "", location: "", description: "" });
  const handleMove = (dragIndex: number, hoverIndex: number): void => {
    move(dragIndex, hoverIndex);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Experience</h1>
      <p className="text-gray-400 text-sm">
        Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts
      </p>
      {Boolean(fields?.length) && (
        <>
          {experience.map((item, index) => (
            <ExperienceItem index={index} key={index} handleDelete={() => remove(index)} handleMove={handleMove} />
          ))}
        </>
      )}

      <ButtonText onClick={handleAddClick} name="+ Add one more employment" />
    </div>
  );
};
