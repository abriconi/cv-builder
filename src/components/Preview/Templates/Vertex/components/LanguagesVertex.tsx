import { LanguagesType } from "../../../../../types";
import { LanguageItem } from "../../../../../shared-components/LanguageItem";
import { HeadingVertex } from "./HeadingVertex";

interface Props {
  languages: LanguagesType[];
}
export const LanguagesVertex: React.FC<Props> = ({ languages }: Props) => {
  return (
    <div className="flex flex-col items-start w-full gap-2">
      <HeadingVertex tag="h2" title="Languages" />

      <div className="flex flex-col gap-1 w-full">
        {languages.map((lang, index) => (
          <LanguageItem language={lang} key={index} />
        ))}
      </div>
    </div>
  );
};
