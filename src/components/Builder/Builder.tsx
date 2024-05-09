import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { MainInfo } from "./components/MainInfo";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";
import { Experience } from "./components/Experience/Experience";
import { Education } from "./components/Education/Education";
import { Languages } from "./components/Languages/Languages";
import { Social } from "./components/Social/Social";
import { Button } from "../../shared-components/Buttons/Buttons";
import { Skills } from "./components/Skills/Skills";
import { ResumeScore } from "./components/ResumeScore/ResumeScore";
import { useEffect } from "react";
import { useTemplateContext } from "../../context/TemplateContext";

export const Builder = () => {
  const { userData, updateUserData, handleIframeUpload } = useTemplateContext();
  const methods = useForm({
    defaultValues: userData,
  });
  const { handleSubmit } = methods;

  useEffect(() => {
    //@ts-ignore
    const subscription = methods.watch((data) => handleSubmit(updateUserData)(data));
    return () => subscription.unsubscribe();
  }, [handleSubmit, methods]);

  handleIframeUpload();

  return (
    <div className="flex flex-col w-full gap-10 px-10 py-10 h-full overflow-y-auto">
      <ResumeScore cvData={userData} />
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(updateUserData)} className="flex flex-col w-full gap-10">
          <Header />
          <MainInfo />
          <Summary />
          <Experience />
          <Education />
          <Languages />
          <Social />
          <Skills />
          <Button name={"Create CV"} type="submit" />
        </form>
      </FormProvider>
    </div>
  );
};
