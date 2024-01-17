import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { MainInfo } from "./components/MainInfo";
import { Header } from "./components/Header";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Social } from "./components/Social/Social";
import { Button } from "../../shared-components/Buttons";
import { Skills } from "./components/Skills/Skills";
import { useCvData } from "../../context/CvDataContext";

export const Builder = () => {
  const methods = useForm({
    defaultValues: {
      jobPosition: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
      city: "",
      address: "",
      postalCode: "",
      nationality: "",
      placeOfBirth: "",
      dateOfBirth: "",
      summary: "",
      experience: [],
      education: [],
      languages: [],
      social: [],
      skills: [],
    },
  });
  const { setCvData } = useCvData();

  const onSubmit = (data: any) => {
    localStorage.setItem("user", JSON.stringify(data));
    setCvData(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="flex flex-col w-full py-8 px-20 gap-4 sm:px-10 md:px-10">
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
  );
};
