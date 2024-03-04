import { LanguagesTypeWithId } from "../../../../../../../types";
import { LangItemLumina } from "./LangItemLumina";

interface Props {
  languages: LanguagesTypeWithId[];
}
export const LanguageLumina: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full">
      <h2 className="text-l pb-1 text-semibold">LANGUAGES</h2>
      <div className="flex flex-col gap-2 w-full">
        {languages.map((lang, index) => (
          <LangItemLumina language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
