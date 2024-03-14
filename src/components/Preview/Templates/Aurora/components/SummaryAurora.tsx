interface SummaryProps {
  summary: string;
}
export const SummaryAurora: React.FC<SummaryProps> = ({ summary }: SummaryProps) => {
  return (
    <div className="flex flex-col gap-2 items-start">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p className="text-sm">{summary}</p>
    </div>
  );
};
