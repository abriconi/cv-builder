import { useEffect, useState } from "react";
import { CvType } from "../../../../types";
import { ECHO, TEMPLATES } from "../../../../helpers/constants";
import { HeaderEcho } from "./components/HeaderEcho";
import { SummaryEcho } from "./components/SummaryEcho";
import { ExperienceEcho } from "./components/ExperienceEcho";
import { EducationEcho } from "./components/EducationEcho";
import { DetailsEcho } from "./components/DetailsEcho";
import { SocialEcho } from "./components/SocialEcho";
import { SkillsEcho } from "./components/SkillsEcho";
import { LanguagesEcho } from "./components/LanguagesEcho";

export const Echo = () => {
  const [userData, setUserData] = useState<CvType | undefined>(undefined);
  const [userPhoto, setUserPhoto] = useState(undefined);
  const root = document.documentElement;
  const template = TEMPLATES.find((template) => template.name === ECHO);

  if (template && template.colors.length > 0) {
    root.style.setProperty("--primary-color", template.colors[0].primary);
    root.style.setProperty("--primary-shade", template.colors[0].secondary);
  }

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
    if (window.top && template) {
      // @ts-ignore
      window.top.postMessage({
        type: "colors-to-parent",
        colors: template.colors,
        templateName: template.name,
      });
    }
  }, []);

  useEffect(() => {
    const receiveMessage = (event: MessageEvent) => {
      if (event.origin !== "http://localhost:3000") return;

      const receivedData = event.data;

      if (receivedData.type === "custom-message-type") {
        setUserData(receivedData.data);
        setUserPhoto(receivedData.photo);
      }
      if (receivedData.type === "colors-to-iframe") {
        root.style.setProperty("--primary-color", receivedData.color.primary);
        root.style.setProperty("--primary-shade", receivedData.color.secondary);
      }
    };

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", () => {});
    };
  }, []);

  return (
    <div id="vertex-template" className="flex flex-col gap-5" style={{ width: "210mm" }}>
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
