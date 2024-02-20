import React from "react";

interface Props {
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
}

export const DetailsVertex: React.FC<Props> = ({ city, country, phoneNumber, email }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <h2 className="text-l pb-1">Details:</h2>
      <p className="text-sm">{city}</p>
      <p className="text-sm">{country}</p>
      <p className="text-sm">{phoneNumber}</p>
      <p className="text-sm text-blue-600">{email}</p>
    </div>
  );
};
