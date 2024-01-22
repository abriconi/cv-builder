import { useFieldArray, useFormContext } from "react-hook-form";
import { EducationItem } from "./EducationItem";
import { ButtonText } from "../../../../shared-components/Buttons";
import { EducationType } from "../../../../types";

export const Education = () => {
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
    name: "education",
    control,
  });
  const education = fields as unknown as EducationType[];
  const handleAddClick = () => append({ school: "", degree: "", startDate: "", endDate: "", location: "", description: "" });

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Education</h1>
      <p className="text-gray-400 text-sm">
        A varied education on your resume sums up the value that your learnings and background will bring to job.
      </p>
      {Boolean(fields?.length) && (
        <>
          {education.map((item, index) => (
            <EducationItem index={index} key={index} handleDelete={removeParameters} />
          ))}
        </>
      )}
      <ButtonText onClick={handleAddClick} name="+ Add one more education" />
    </div>
  );
};
