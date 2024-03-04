import React from "react";
import { CvType } from "../../../../../types";

interface HeaderProps {
  img: string | undefined;
  userData: CvType | undefined;
}

export const HeaderLumina: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return userData ? (
    <div className="flex flex-col gap-5 items-center">
      <div className="rounded-full bg-gray-50 w-16 h-16 flex items-center justify-center">
        <img src={img} alt="Uploaded user" className="h-full w-full rounded-full" />
      </div>
      <h1 className="text-2xl">
        {userData.firstName} {userData.lastName}
      </h1>
      <p className="w-10 h-0.5 rounded" style={{ backgroundColor: "var(--primary-shade)" }}></p>
      <p className="uppercase text-sm">{userData.jobPosition}</p>
    </div>
  ) : null;
};
