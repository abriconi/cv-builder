import { useState } from "react";
import { Builder } from "./components/Builder/Builder";
import { Preview } from "./components/Preview/Preview";
import { ChooseTemplate } from "./components/ChooseTemplate/ChooseTemplate";
import { VerticalDivider } from "./shared-components/VerticalDivider/VerticalDivider";

function App() {
  const [showTemplates, setShowTemplates] = useState(true);
  return (
    <div className="flex flex-row h-lvh overflow-hidden">
      <div className="w-1/2 overflow-y-auto">{showTemplates ? <ChooseTemplate /> : <Builder />}</div>
      <VerticalDivider />
      <div className="bg-gray-600 w-1/2 flex flex-col gap-3 pt-10 px-10 h-full pb-5 overflow-hidden">
        <Preview showTemplates={showTemplates} setShowTemplates={setShowTemplates} />
      </div>
    </div>
  );
}

export default App;

// <>
//   <div className="flex flex-row h-lvh overflow-hidden">
//     <div className="flex flex-col w-full py-10 px-10 gap-4 overflow-y-auto">
//       <Builder />
//     </div>
//     <div className="bg-gray-600 w-full flex flex-col gap-3 pt-10 px-10 h-full pb-5 overflow-hidden">
//       <Preview />
//     </div>
//   </div>
// </>
