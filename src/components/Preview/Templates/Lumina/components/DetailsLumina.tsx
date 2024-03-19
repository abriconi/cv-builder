import { HeadingLumina } from "./HeadingLumina";

interface Props {
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
}
export const DetailsLumina: React.FC<Props> = ({ city, country, phoneNumber, email }) => {
  return (
    <div className="flex flex-col gap-2">
      <HeadingLumina tag="h2" title="details" uppercase={true} />
      <div className="flex flex-col text-sm">
        <p>{city}</p>
        <p>{country}</p>
        <p>{phoneNumber}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};
