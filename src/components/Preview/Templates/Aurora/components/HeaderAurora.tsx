import React from "react";
import { CvType } from "../../../../../types";

interface HeaderProps {
  img: string | undefined;
  userData: CvType | undefined;
}
export const HeaderAurora: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return (
    <div className="flex flex-row w-full">
      <div className="w-1/3">
        <img src={img} alt="Uploaded user" className="object-cover aspect-square" />
      </div>

      <div className="flex flex-col justify-between w-2/3 p-10" style={{ backgroundColor: "var(--primary-color)" }}>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold">
            {userData?.firstName} {userData?.lastName}
          </h1>
          <p>{userData?.jobPosition}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p>
            {userData?.city}, {userData?.country}
          </p>
          <p>
            {userData?.phone} &#183; <span className="underline">{userData?.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
