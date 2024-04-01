import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: Routes.Root,
    element: <App />,
  },
]);
