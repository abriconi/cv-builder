import React from "react";
import { CvType } from "../../../../types";

interface HeaderProps {
  img: string | undefined;
  userData: CvType | undefined;
}

export const HeaderVertex: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return userData ? (
    <div className="flex flex-row gap-5">
      <div className="rounded-md border bg-gray-50 shadow-md border border-gray-300 w-16 h-16 flex items-center justify-center">
        <img src={img} alt="Uploaded user" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">
          {userData.firstName} {userData.lastName}
        </h1>
        <p>{userData.jobPosition}</p>
      </div>
    </div>
  ) : null;
};
