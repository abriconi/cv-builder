import React, { useEffect, useState } from "react";
import { ColorPalette, CvType } from "../../../../types";
import { HeaderVertex } from "./HeaderVertex";
import { EducationVertex } from "./EducationVertex/EducationVertex";
import { ExperienceVertex } from "./ExperienceVertex/ExperienceVertex";
import { SummaryVertex } from "./SummaryVertex";
import { DetailsVertex } from "./DetailsVertex";
import { SocialVertex } from "./SocialVertex";
import { SkillsVertex } from "./SkillsVertex/SkillsVertex";
import { LanguageVertex } from "./LanguagesVertex/LanguageVertex";
import { ColorSelector } from "../../../../shared-components/ColorSelector";
import { TEMPLATES, VERTEX } from "../../../../helpers/constants";

export const Vertex = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const template = TEMPLATES.find((template) => template.name === VERTEX);

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
      <div className="flex flex-col p-8 bg-white gap-10">
        <HeaderVertex img={userPhoto} userData={userData} />
        {userData && (
          <div className="flex flex-row gap-5 w-full">
            <div className="flex flex-col gap-10 w-2/3">
              <SummaryVertex summary={userData.summary} />
              <ExperienceVertex experience={userData.experience} />
              <EducationVertex education={userData.education} />
            </div>
            <div className="w-1/3 gap-5 flex flex-col">
              <DetailsVertex country={userData.country} city={userData.city} phoneNumber={userData.phone} email={userData.email} />
              <SocialVertex socialLinks={userData.social} />
              <SkillsVertex skills={userData.skills} />
              <LanguageVertex languages={userData.languages} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
