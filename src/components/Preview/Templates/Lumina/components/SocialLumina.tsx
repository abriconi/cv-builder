import { SocialType } from "../../../../../types";

interface Props {
  socialLinks: SocialType[];
}

export const SocialLumina: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-l pb-1 font-semibold">LINKS</h2>
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
