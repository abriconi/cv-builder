import { CV_FIELDS } from "../../../helpers/enums";
import { CustomTextarea } from "../../../shared-components/CustomTextarea";

export const Summary = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-semibold">Professional Summary</h1>
      <p className="text-gray-400 text-sm">
        Write 2-4 short & energetic sentences to interest the reader! Mention your role, experience & most importantly - your biggest
        achievements, best qualities and skills.
      </p>
      <CustomTextarea name={CV_FIELDS.summary} />
    </div>
  );
};
