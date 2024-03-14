import React from "react";
import { Builder } from "./components/Builder/Builder";
import { Preview } from "./components/Preview/Preview";

function App() {
  return (
    <>
      <div className="flex flex-row h-lvh overflow-hidden">
        <div className="flex flex-col w-full py-10 px-10 gap-4 overflow-y-auto">
          <Builder />
        </div>
        <div className="bg-gray-600 w-full flex flex-col gap-3 pt-10 px-10 h-full pb-5 overflow-hidden">
          <Preview />
        </div>
      </div>
    </>
  );
}

export default App;
