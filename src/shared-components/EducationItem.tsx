import { dateFormatter } from "../helpers";
import { EducationTypeWithId } from "../types";

interface Props {
  item: EducationTypeWithId;
}

export const EducationItem: React.FC<Props> = ({ item }: Props) => {
  const startDate = dateFormatter(item.startDate);
  const endDate = dateFormatter(item.endDate);

  return (
    <div className="flex flex-col pt-2">
      <p className="font-semibold text-sm">
        {item.degree ? `${item.degree}, ${item.school}` : `${item.school}`}
        {item.location && <span>{`, ${item.location}`}</span>}
      </p>
      <p className="text-gray-400 text-sm">{`${startDate} - ${endDate}`}</p>
      <p className="text-sm whitespace-pre-line">{item.description}</p>
    </div>
  );
};
