import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VerticalDivider } from "../../../../shared-components/VerticalDivider/VerticalDivider";
import { faUser } from "@fortawesome/free-solid-svg-icons";

interface Props {
  summary: string;
}

const Summary: React.FC<Props> = ({ summary }: Props) => {
  return <div>{summary}</div>;
};

export const SummaryEcho: React.FC<Props> = ({ summary }: Props) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row gap-4 items-center -ml-1.5">
        <FontAwesomeIcon icon={faUser} style={{ color: "var(--primary-color)" }} />
        <h2 className="uppercase" style={{ color: "var(--primary-color)" }}>
          Profile
        </h2>
      </div>

      <VerticalDivider>
        <Summary summary={summary} />
      </VerticalDivider>
    </div>
  );
};
