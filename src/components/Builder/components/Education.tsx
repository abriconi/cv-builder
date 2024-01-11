import { useFieldArray, useFormContext } from "react-hook-form";
import { EducationItem } from "./EducationItem";
import { ButtonText } from "../../../shared-components/Buttons";

export const Education = () => {
  const { control, reset, trigger, setError } = useFormContext();
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    name: "education",
    control,
  });

  const handleAddClick = () => append({ course: "", institution: "", startDate: "", endDate: "", location: "", description: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Education</h1>
      <p className="text-gray-400 text-sm">
        A varied education on your resume sums up the value that your learnings and background will bring to job.
      </p>
      <div className="flex flex-col gap-4">
        {fields.map((item, index) => (
          <EducationItem item={item} index={index} key={item.id} />
        ))}
      </div>
      <ButtonText onClick={handleAddClick} name="+ Add one more education" />
    </div>
  );
};
