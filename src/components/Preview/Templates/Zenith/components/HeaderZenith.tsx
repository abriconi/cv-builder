import clsx from "clsx";
import styles from "../zenith.module.css";
import { HeadingZenith } from "./HeadingZenith";
import { WrapperShade } from "./WrapperShade";

interface Props {
  img: string | undefined;
  firstName: string;
  lastName: string;
  jobTitle: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  summary: string;
}

export const HeaderZenith: React.FC<Props> = ({ img, jobTitle, email, phone, city, country, firstName, lastName, summary }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-row items-center">
        <div className="w-1/3">
          <img src={img} alt="Uploaded user" className="w-[150px] object-cover aspect-square rounded-md" />
        </div>
        <div className="w-2/3">
          <HeadingZenith tag="h1" title={`${firstName} ${lastName}`} />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/3">
          <HeadingZenith tag="h3" title={jobTitle} />
          <p className="text-sm">{email}</p>
          <p className="text-sm pb-2">{phone}</p>
          <p className="text-sm">
            {city}, {country}
          </p>
        </div>
        <WrapperShade>
          <HeadingZenith tag="h2" title="Profile" />
          <p className="text-sm">{summary}</p>
        </WrapperShade>
      </div>
      <div className={clsx(styles.border)}></div>
    </div>
  );
};
