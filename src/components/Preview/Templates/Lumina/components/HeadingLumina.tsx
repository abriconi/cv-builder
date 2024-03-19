interface Props {
  tag: "h1" | "h2";
  title: string;
  uppercase?: boolean;
}

export const HeadingLumina: React.FC<Props> = ({ tag, title, uppercase = false }: Props) => {
  return (
    <>
      {tag === "h1" && <h1 className="text-2xl">{title}</h1>}
      {tag === "h2" && <h2 className={uppercase ? "uppercase text-l font-semibold" : "text-l font-semibold"}>{title}</h2>}
    </>
  );
};
