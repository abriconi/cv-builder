import { TemplateType } from "../types";

const hostRoute = "http://localhost:5174";

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
    img: `${hostRoute}/public/img/vertex-screenshot.jpeg`,
  },
  {
    name: "lumina",
    route: TemplateRoutes.Lumina,
    img: `${hostRoute}/public/img/lumina-screenshot.jpeg`,
  },
  {
    name: "aurora",
    route: TemplateRoutes.Aurora,
    img: `${hostRoute}/public/img/aurora-screenshot.jpeg`,
  },
  {
    name: "echo",
    route: TemplateRoutes.Echo,
    img: `${hostRoute}/public/img/echo-screenshot.jpeg`,
  },
  {
    name: "zenith",
    route: TemplateRoutes.Zenith,
    img: `${hostRoute}/public/img/zenith-screenshot.jpeg`,
  },
];
