import { useEffect, useState } from "react";
import { CvType } from "../../../../types";
import { ColorSelector } from "../../../../shared-components/ColorSelector/ColorSelector";
import { TEMPLATES, ZENITH } from "../../../../helpers/constants";
import { HeaderZenith } from "./components/HeaderZenith";
import { ExperienceZenith } from "./components/ExperienceZenith";
import { EducationZenith } from "./components/EducationZenith";
import { SocialZenith } from "./components/SocialZenith";
import { LanguagesZenith } from "./components/LanguagesZenith";
import { SkillsZenith } from "./components/SkillsZenith";

export const Zenith = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const template = TEMPLATES.find((template) => template.name === ZENITH);

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
  console.log(userData);

  return (
    <div id="vertex-template" className="flex flex-col gap-5" style={{ width: "210mm" }}>
      <ColorSelector template={template} />
      {userData && (
        <div className="flex flex-col p-8 bg-white gap-10" style={{ color: "var(--primary-color)" }}>
          <HeaderZenith
            img={userPhoto}
            firstName={userData.firstName}
            lastName={userData.lastName}
            jobTitle={userData.jobPosition}
            email={userData.email}
            phone={userData.phone}
            city={userData.city}
            country={userData.country}
            summary={userData.summary}
          />
          <div className="flex flex-row gap-10">
            <div className="flex flex-col w-3/5">
              <ExperienceZenith experience={userData.experience} />
              <EducationZenith education={userData.education} />
            </div>
            <div className="flex flex-col w-2/5 gap-10">
              <SocialZenith social={userData.social} />
              <LanguagesZenith languages={userData.languages} />
              <SkillsZenith skills={userData.skills} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
