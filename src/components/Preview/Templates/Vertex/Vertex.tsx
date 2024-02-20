import React from "react";
import { CvType } from "../../../../types";
import { HeaderVertex } from "./HeaderVertex";
import { EducationVertex } from "./EducationVertex/EducationVertex";
import { ExperienceVertex } from "./ExperienceVertex/ExperienceVertex";
import { SummaryVertex } from "./SummaryVertex";
import { DetailsVertex } from "./DetailsVertex";
import { SocialVertex } from "./SocialVertex";
import { SkillsVertex } from "./SkillsVertex/SkillsVertex";
import { LanguageVertex } from "./LanguagesVertex/LanguageVertex";

interface VertexProps {
  img?: string;
  userData: CvType;
  // ref: React.RefObject<any>;
}
export const Vertex: React.FC<VertexProps> = ({ img = undefined, userData }: VertexProps) => {
  return (
    <div className="flex flex-col p-8 bg-white gap-10">
      <HeaderVertex img={img} userData={userData} />

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
    </div>
  );
};
