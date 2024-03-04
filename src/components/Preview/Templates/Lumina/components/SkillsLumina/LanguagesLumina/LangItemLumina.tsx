import clsx from "clsx";
import { LANGUAGE_LEVELS } from "../../../../../../../helpers/constants";
import { LanguagesTypeWithId } from "../../../../../../../types";

interface Props {
  language: LanguagesTypeWithId;
}

export const LangItemLumina: React.FC<Props> = ({ language }: Props) => {
  return (
    <div className="flex flex-col">
      <p className="text-sm">{language.language}</p>
      <div className="w-full h-1 relative rounded" style={{ backgroundColor: "var(--primary-shade)" }}>
        <span
          className={clsx("absolute h-1 rounded bg-white", {
            "w-1/6": language.level === LANGUAGE_LEVELS.beginner,
            "w-1/3": language.level === LANGUAGE_LEVELS.elementary,
            "w-1/2": language.level === LANGUAGE_LEVELS.intermediate,
            "w-2/3": language.level === LANGUAGE_LEVELS.upperIntermediate,
            "w-5/6": language.level === LANGUAGE_LEVELS.advanced,
            "w-full": language.level === LANGUAGE_LEVELS.nativeSpeaker || language.level === LANGUAGE_LEVELS.proficiency,
          })}></span>
      </div>
    </div>
  );
};
