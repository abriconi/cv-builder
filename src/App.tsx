import { useState } from "react";
import { Builder } from "./components/Builder/Builder";
import { Preview } from "./components/Preview/Preview";
import { ChooseTemplate } from "./components/ChooseTemplate/ChooseTemplate";
import { VerticalDivider } from "./shared-components/VerticalDivider/VerticalDivider";
import { TemplateProvider } from "./context/TemplateContext";

function App() {
  const [showTemplates, setShowTemplates] = useState(false);

  return (
    <TemplateProvider>
      <div className="flex flex-row h-lvh overflow-hidden">
        <div className="w-1/2 relative h-full">
          {/* overflow-y-auto */}
          <ChooseTemplate showTemplates={showTemplates} />
          <Builder />
        </div>
        <VerticalDivider />
        <div className="bg-gray-600 w-1/2 flex flex-col gap-3 pt-10 px-10 h-full pb-5 overflow-hidden">
          <Preview showTemplates={showTemplates} setShowTemplates={setShowTemplates} />
        </div>
      </div>
    </TemplateProvider>
  );
}

export default App;
