interface Props {
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
}
export const DetailsLumina: React.FC<Props> = ({ city, country, phoneNumber, email }) => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <h2 className="text-l pb-1 font-semibold">DETAILS</h2>
      <p>{city}</p>
      <p>{country}</p>
      <p>{phoneNumber}</p>
      <p>{email}</p>
    </div>
  );
};
