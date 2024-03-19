import { SocialType } from "../../../../../types";
import { HeadingLumina } from "./HeadingLumina";

interface Props {
  socialLinks: SocialType[];
}

export const SocialLumina: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <HeadingLumina tag="h2" title="links" uppercase={true} />
      <div className="flex flex-col">
        {socialLinks.map((link, index) => (
          <a href={link.link} key={index} className="text-sm cursor-pointer text-white underline">
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
