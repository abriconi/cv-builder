import React from "react";
import { CvType } from "../../../../../types";
import { HeadingVertex } from "./HeadingVertex";

interface HeaderProps {
  img: string | undefined;
  userData: CvType | undefined;
}

export const HeaderVertex: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return userData ? (
    <div className="flex flex-row gap-5">
      <div className="rounded-md border bg-gray-50 shadow-md border-gray-300 w-16 h-16 flex items-center justify-center">
        <img src={img} alt="Uploaded user" className="h-full w-full" />
      </div>
      <div className="flex flex-col gap-2">
        <HeadingVertex tag="h1" title={`${userData.firstName} ${userData.lastName}`} />
        <HeadingVertex tag="h2" title={userData.jobPosition} />
      </div>
    </div>
  ) : null;
};
