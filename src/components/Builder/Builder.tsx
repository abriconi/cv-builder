import React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { MainInfo } from "./components/MainInfo";
import { Header } from "./components/Header";
import { AdditionalInfo } from "./components/AdditionalInfo";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Languages } from "./components/Langages";
import { Social } from "./components/Social";

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
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
