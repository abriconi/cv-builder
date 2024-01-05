interface TitleProps {
  name: string;
}
export const Title: React.FC<TitleProps> = ({ name }: TitleProps) => {
  return (
    <input type="text" placeholder="Job position" name={name}>
      Title
    </input>
  );
};
