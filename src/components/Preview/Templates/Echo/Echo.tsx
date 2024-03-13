import { useEffect, useState } from "react";
import { CvType } from "../../../../types";
import { ColorSelector } from "../../../../shared-components/ColorSelector/ColorSelector";
import { ECHO, TEMPLATES, VERTEX } from "../../../../helpers/constants";
import { HeaderEcho } from "./HeaderEcho";
import { SummaryEcho } from "./SummaryEcho";
import { ExperienceEcho } from "./ExperienceEcho";
import { EducationEcho } from "./EducationEcho";
import { DetailsEcho } from "./DetailsEcho";
import { SocialEcho } from "./SocialEcho";
import { SkillsEcho } from "./SkillsEcho";
import { LanguagesEcho } from "./LanguagesEcho";

export const Echo = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const template = TEMPLATES.find((template) => template.name === ECHO);

  useEffect(() => {
    const handleResize = () => {
      const zoomValue = (window.innerWidth / (document.getElementById("vertex-template")?.offsetWidth as number)).toFixed(4);
      // @ts-ignore
      document.body.style.zoom = zoomValue;
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:3000") return;

      const receivedData = event.data;

      if (receivedData.type === "custom-message-type") {
        setUserData(receivedData.data);
        setUserPhoto(receivedData.photo);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <div id="vertex-template" className="flex flex-col gap-5" style={{ width: "210mm" }}>
      <ColorSelector template={template} />
      {userData && (
        <div className="flex flex-col p-8 bg-white gap-10">
          <HeaderEcho img={userPhoto} userData={userData} />
          <div className="flex flex-row gap-5 w-full">
            <div className="w-1/3 gap-5 flex flex-col items-center pr-10 pl-10">
              <DetailsEcho country={userData.country} city={userData.city} phoneNumber={userData.phone} email={userData.email} />
              <SocialEcho socialLinks={userData.social} />
              <SkillsEcho skills={userData.skills} />
              <LanguagesEcho languages={userData.languages} />
            </div>
            <div className="flex flex-col gap-10 w-2/3">
              <SummaryEcho summary={userData.summary} />
              <ExperienceEcho experience={userData.experience} />
              <EducationEcho education={userData.education} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
