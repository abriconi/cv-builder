import { SectionHeader } from "../../../../../shared-components/SectionHeader/SectionHeader";
import { SocialType } from "../../../../../types";

interface Props {
  socialLinks: SocialType[];
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
