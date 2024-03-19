import React from "react";
import { HeadingVertex } from "./HeadingVertex";

interface Props {
  city: string;
  country: string;
  phoneNumber: string;
  email: string;
}

export const DetailsVertex: React.FC<Props> = ({ city, country, phoneNumber, email }: Props) => {
  return (
    <div className="flex flex-col items-start">
      <HeadingVertex tag="h2" title="Details" />
      <p className="text-sm">{city}</p>
      <p className="text-sm">{country}</p>
      <p className="text-sm">{phoneNumber}</p>
      <p className="text-sm" style={{ color: "var(--primary-color)" }}>
        {email}
      </p>
    </div>
  );
};
