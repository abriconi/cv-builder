import { SocialType } from "../../../../types";

interface Props {
  socialLinks: SocialType[];
}

export const SocialVertex: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-l pb-1">Links:</h2>
      <div className="flex flex-col">
        {socialLinks.map((link, index) => (
          <a href={link.link} key={index} className="text-sm cursor-pointer" style={{ color: "var(--primary-color)" }}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
