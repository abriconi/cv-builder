interface Props {
  tag: "h1" | "h2";
  title: string;
}
const [h1, h2] = ["h1", "h2"];

export const HeadingEcho: React.FC<Props> = ({ tag, title }) => {
  return (
    <>
      {tag === h1 && <h1 className="uppercase text-2xl">{title}</h1>}
      {tag === h2 && (
        <h2 className="uppercase" style={{ color: "var(--primary-color)" }}>
          {title}
        </h2>
      )}
    </>
  );
};
