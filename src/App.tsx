import React from "react";
import { Builder } from "./components/Builder/Builder";
import { Preview } from "./components/Preview/Preview";
import { CvDataProvider } from "./context/CvDataContext";

function App() {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row">
      <CvDataProvider>
        <Builder />
        <Preview />
      </CvDataProvider>
    </div>
  );
}

export default App;
