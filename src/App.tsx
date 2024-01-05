import React from "react";
import "./App.css";
import { Builder } from "./components/Builder/Builder";
import { Preview } from "./components/Preview/Preview";

function App() {
  return (
    <div className="flex flex-col md:flex-row sm:flex-row w-screen h-screen">
      <Builder />
      <Preview />
    </div>
  );
}

export default App;
