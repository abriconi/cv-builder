import { LanguagesTypeWithId } from "../../../../types";
import { LanguageItem } from "../../../../shared-components/LanguageItem";

interface Props {
  languages: LanguagesTypeWithId[];
}
export const LanguagesVertex: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1">Languages:</h2>
      <div className="flex flex-col gap-2 w-full">
        {languages.map((lang, index) => (
          <LanguageItem language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
