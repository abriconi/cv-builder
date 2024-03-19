import { SocialType } from "../../../../../types";
import { HeadingVertex } from "./HeadingVertex";

interface Props {
  socialLinks: SocialType[];
}

export const SocialVertex: React.FC<Props> = ({ socialLinks }: Props) => {
  return (
    <div className="flex flex-col items-start gap-2">
      <HeadingVertex tag="h2" title="Links" />

      <div className="flex flex-col gap-1">
        {socialLinks.map((link, index) => (
          <a href={link.link} key={index} className="text-sm cursor-pointer" style={{ color: "var(--primary-color)" }}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
