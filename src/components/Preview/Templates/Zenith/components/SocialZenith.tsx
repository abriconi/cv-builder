import React from "react";
import { SocialType } from "../../../../../types";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";

interface Props {
  social: SocialType[];
}

export const SocialZenith: React.FC<Props> = ({ social }: Props) => {
  return (
    <WrapperShade>
      <HeadingZenith tag="h2" title="Social" />
      {social.map((item, index) => (
        <a href={item.link} className="text-sm underline" key={index}>
          {item.label}
        </a>
      ))}
    </WrapperShade>
  );
};
