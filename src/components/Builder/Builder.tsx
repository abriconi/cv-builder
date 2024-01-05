import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { CustomInput } from "../../shared-components/CustomInput";
import { cvFields } from "../../constants";
import { MainInfo } from "./components/MainInfo";
import { Header } from "./components/Header";

export const Builder = () => {
  const { handleSubmit, control } = useForm({
    defaultValues: {
      jobPosition: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      country: "",
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full py-8 px-20 gap-4 sm:px-10 md:px-10">
      <Header />
      <MainInfo />
      <button type="submit">Submit</button>
    </form>
  );
};
