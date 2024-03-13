import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MainInfo } from "./components/MainInfo";
import { Header } from "./components/Header";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Social } from "./components/Social/Social";
import { Button } from "../../shared-components/Buttons/Buttons";
import { Skills } from "./components/Skills/Skills";
import { CvType } from "../../types";
import { ResumeScore } from "./components/ResumeScore/ResumeScore";

export const Builder = () => {
  const [cvData, setCvData] = useState<CvType>(JSON.parse(localStorage.getItem("user") || "{}"));

  const methods = useForm({
    defaultValues: {
      jobPosition: cvData.jobPosition || "",
      firstName: cvData.firstName || "",
      lastName: cvData.lastName || "",
      email: cvData.email || "",
      phone: cvData.phone || "",
      country: cvData.country || "",
      city: cvData.city || "",
      address: cvData.address || "",
      postalCode: cvData.postalCode || "",
      nationality: cvData.nationality || "",
      placeOfBirth: cvData.placeOfBirth || "",
      dateOfBirth: cvData.dateOfBirth || "",
      summary: cvData.summary || "",
      experience: cvData.experience || [],
      education: cvData.education || [],
      languages: cvData.languages || [],
      social: cvData.social || [],
      skills: cvData.skills || [],
    },
  });

  const onSubmit = (data: CvType) => {
    localStorage.setItem("user", JSON.stringify(data));
    setCvData(JSON.parse(localStorage.getItem("user") || "{}"));
  };

  return (
    <>
      <ResumeScore cvData={cvData} />
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 ">
          <Header />
          <MainInfo />
          <AdditionalInfo />
          <Summary />
          <Experience />
          <Education />
          <Languages />
          <Social />
          <Skills />
          <Button name={"Create CV"} type="submit" />
        </form>
      </FormProvider>
    </>
  );
};
