import { HeadingAurora } from "./HeadingAurora";

interface SummaryProps {
  summary: string;
}
export const SummaryAurora: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <HeadingAurora tag="h2" title="Profile" />
      <p className="text-sm">{summary}</p>
    </div>
  );
};
