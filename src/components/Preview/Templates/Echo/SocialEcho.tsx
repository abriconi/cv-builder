import { SectionHeader } from "../../../../shared-components/SectionHeader/SectionHeader";
import { SocialTypeWithId } from "../../../../types";

interface Props {
  socialLinks: SocialTypeWithId[];
}
export const SocialEcho: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <SectionHeader header="Social" />
      <div className="flex flex-col items-center">
        {socialLinks.map((link, index) => (
          <a className="underline" href={link.link} key={index}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
