import { TemplateType } from "../types";

export const hostRoute = "http://localhost:5173";

const TemplateRoutes = {
  Vertex: `${hostRoute}/vertex`,
  Lumina: `${hostRoute}/lumina`,
  Zenith: `${hostRoute}/zenith`,
  Echo: `${hostRoute}/echo`,
  Aurora: `${hostRoute}/aurora`,
};

export const TEMPLATES: TemplateType[] = [
  {
    name: "vertex",
    route: TemplateRoutes.Vertex,
  },
  {
    name: "lumina",
    route: TemplateRoutes.Lumina,
  },
  {
    name: "aurora",
    route: TemplateRoutes.Aurora,
  },
  {
    name: "echo",
    route: TemplateRoutes.Echo,
  },
  {
    name: "zenith",
    route: TemplateRoutes.Zenith,
  },
];
