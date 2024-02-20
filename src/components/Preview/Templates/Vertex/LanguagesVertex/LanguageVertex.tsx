import { LanguagesTypeWithId } from "../../../../../types";
import { LangItemVertex } from "./LangItemVertex";

interface Props {
  languages: LanguagesTypeWithId[];
}
export const LanguageVertex: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1">Skills:</h2>
      <div className="flex flex-col gap-2 w-full">
        {languages.map((lang, index) => (
          <LangItemVertex language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
