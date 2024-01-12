import { useFieldArray, useFormContext } from "react-hook-form";
import { ExperienceItem } from "./ExperienceItem";
import { Button, ButtonText } from "../../../../shared-components/Buttons";

export const Experience = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "experience",
    control,
  });

  const handleAddClick = () => append({ title: "", companyName: "", startDate: "", endDate: "", location: "", description: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Employment History</h1>
      <p className="text-gray-400 text-sm">
        Show your relevant experience (last 10 years). Use bullet points to note your achievements, if possible - use numbers/facts
      </p>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <ExperienceItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <ButtonText onClick={handleAddClick} name="+ Add one more employment" />
    </div>
  );
};
