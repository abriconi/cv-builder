import { useFieldArray } from "react-hook-form";
import { ExperienceItem } from "./ExperienceItem";
import { ButtonText } from "../../../../shared-components/Buttons/Buttons";
import { LanguagesType } from "../../../../types";

export const Experience = () => {
  const { append, remove, fields } = useFieldArray({
    name: "experience",
  });
  const experience = fields as unknown as LanguagesType[];
  const handleAddClick = () => append({ title: "", companyName: "", startDate: "", endDate: "", location: "", description: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Experience</h1>
      <p className="text-gray-400 text-sm">
        Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts
      </p>
      {Boolean(fields?.length) && (
        <>
          {experience.map((item, index) => (
            <ExperienceItem index={index} key={index} handleDelete={() => remove(index)} />
          ))}
        </>
      )}

      <ButtonText onClick={handleAddClick} name="+ Add one more employment" />
    </div>
  );
};
