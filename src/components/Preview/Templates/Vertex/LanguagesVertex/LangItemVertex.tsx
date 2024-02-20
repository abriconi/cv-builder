import clsx from "clsx";
import { LanguagesTypeWithId } from "../../../../../types";
import { LANGUAGE_LEVELS } from "../../../../../constants";

interface Props {
  language: LanguagesTypeWithId;
}

export const LangItemVertex: React.FC<Props> = ({ language }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{language.language}</p>
      <div className="bg-blue-100 w-full h-1 relative rounded">
        <span
          className={clsx("absolute h-1 bg-blue-500 rounded", {
            "w-1/6": language.level === LANGUAGE_LEVELS.beginner,
            "w-1/3": language.level === LANGUAGE_LEVELS.elementary,
            "w-1/2": language.level === LANGUAGE_LEVELS.intermediate,
            "w-2/3": language.level === LANGUAGE_LEVELS.upperIntermediate,
            "w-5/6": language.level === LANGUAGE_LEVELS.advanced,
            "w-full": language.level === LANGUAGE_LEVELS.nativeSpeaker || LANGUAGE_LEVELS.proficiency,
          })}></span>
      </div>
    </div>
  );
};
