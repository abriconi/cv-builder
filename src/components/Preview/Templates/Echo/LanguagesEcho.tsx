import { LanguageItem } from "../../../../shared-components/LanguageItem";
import { SectionHeader } from "../../../../shared-components/SectionHeader/SectionHeader";
import { LanguagesTypeWithId } from "../../../../types";

interface Props {
  languages: LanguagesTypeWithId[];
}
export const LanguagesEcho: React.FC<Props> = ({ languages }) => {
  return (
    <div className="w-full flex flex-col items-center gap-3">
      <SectionHeader header="Languages" />
      <div className="w-full">
        {languages.map((language, index) => (
          <LanguageItem language={language} key={index} aligning="self-center" />
        ))}
      </div>
    </div>
  );
};
