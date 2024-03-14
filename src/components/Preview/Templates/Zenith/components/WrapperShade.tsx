import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const WrapperShade: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full rounded-xl p-4" style={{ backgroundColor: "var(--primary-shade)" }}>
      {children}
    </div>
  );
};
