import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CvType } from "../../../../types";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
  img: string | undefined;
  userData: CvType;
}
export const HeaderEcho: React.FC<HeaderProps> = ({ img, userData }: HeaderProps) => {
  return (
    <div className="flex flex-col gap-5 pb-3 items-center">
      <div className="w-1/6">
        <img src={img} alt="Uploaded user" className="object-cover aspect-square rounded-md" />
      </div>
      <h1 className="uppercase text-2xl">
        {userData.firstName} {userData.lastName}
      </h1>
      <div className="flex flex-row gap-5">
        <p>{userData.jobPosition}</p>
        <div className="flex flex-row gap-1 items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="uppercase">
            {userData.city}, {userData.country}
          </p>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <FontAwesomeIcon icon={faPhone} />
          <p className="uppercase">{userData?.phone}</p>
        </div>
      </div>
    </div>
  );
};
