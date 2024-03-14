import React from "react";
import { SectionHeader } from "../../../../../shared-components/SectionHeader/SectionHeader";

interface Props {
  country: string;
  city: string;
  phoneNumber: string;
  email: string;
}
export const DetailsEcho: React.FC<Props> = ({ country, city, phoneNumber, email }: Props) => {
  return (
    <div className="flex flex-col gap-3 items-center">
      <SectionHeader header="Details" />
      <div className="flex flex-col items-center">
        <p>{city}</p>
        <p>{country}</p>
        <p>{phoneNumber}</p>
        <p className="underline">{email}</p>
      </div>
    </div>
  );
};
