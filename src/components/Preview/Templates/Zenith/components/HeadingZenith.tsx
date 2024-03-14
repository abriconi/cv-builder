import React from "react";

interface Props {
  tag: "h1" | "h2" | "h3";
  title: string;
}

const [h1, h2, h3] = ["h1", "h2", "h3"];

export const HeadingZenith: React.FC<Props> = ({ tag, title }: Props) => {
  return (
    <>
      {tag === h1 && <h1 className="text-7xl font-semibold">{title}</h1>}
      {tag === h2 && <h2 className="font-semibold text-3xl">{title}</h2>}
      {tag === h3 && <h3 className="font-semibold text-xl">{title}</h3>}
    </>
  );
};
