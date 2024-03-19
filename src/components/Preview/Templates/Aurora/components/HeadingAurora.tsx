import React from "react";

interface Props {
  tag: "h1" | "h2";
  title: string;
}
export const HeadingAurora: React.FC<Props> = ({ title, tag }: Props) => {
  return (
    <>
      {tag === "h1" && <h1 className="text-3xl font-semibold">{title}</h1>}
      {tag === "h2" && <h2 className="text-xl font-semibold">{title}</h2>}
    </>
  );
};
