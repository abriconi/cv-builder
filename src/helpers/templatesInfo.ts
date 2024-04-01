import { TemplateType } from "../types";

export const [VERTEX, LUMINA, AURORA, ECHO, ZENITH] = ["vertex", "lumina", "aurora", "echo", "zenith"];

export enum TemplateRoutes {
  Vertex = "http://localhost:5173/vertex",
  Lumina = "http://localhost:5173/lumina",
  Zenith = "http://localhost:5173/zenith",
  Echo = "http://localhost:5173/echo",
  Aurora = "http://localhost:5173/aurora",
}

export const TEMPLATES: TemplateType[] = [
  {
    name: VERTEX,
    route: TemplateRoutes.Vertex,
    colors: [
      {
        primary: "#0000FF",
        secondary: "#9999ff",
      },
      {
        primary: "#004000",
        secondary: "#99b299",
      },
      {
        primary: "#ff3232",
        secondary: "#ffb2b2",
      },
    ],
  },
  {
    name: LUMINA,
    route: TemplateRoutes.Lumina,
    colors: [
      { primary: "#133337", secondary: "#a0adaf" },
      {
        primary: "#222F5B",
        secondary: "#bcc0cd",
      },
      { primary: "#743818", secondary: "#d5c3b9" },
      { primary: "#2F2F2F", secondary: "#c0c0c0" },
    ],
  },
  {
    name: AURORA,
    route: TemplateRoutes.Aurora,
    colors: [
      { primary: "#81D2C7", secondary: "#d9f1ee" },
      {
        primary: "#b5bad0",
        secondary: "#e8eaf0",
      },
      { primary: "#a0b3c3", secondary: "#e2e8ed" },
    ],
  },
  {
    name: ECHO,
    route: TemplateRoutes.Echo,
    colors: [
      {
        primary: "#011f4b",
        secondary: "#b2bbc9",
      },
      {
        primary: "#35485e",
        secondary: "#c2c8ce",
      },
      {
        primary: "#12587b",
        secondary: "#b7ccd7",
      },
    ],
  },
  {
    name: ZENITH,
    route: TemplateRoutes.Zenith,
    colors: [
      {
        primary: "#42496A",
        secondary: "#ececf0",
      },
      {
        primary: "#5B4965",
        secondary: "#eeecef",
      },
      {
        primary: "#2E293A",
        secondary: "#eae9eb",
      },
    ],
  },
];

// Zenith
// Elysian
// Pinnacle
// Nimbus
// Ethereal
// Odyssey
// Phoenix
// Apex
// Infinity
// Vanguard
// Serenity
// Quasar
// Stellar
// Echo
// Catalyst
// Resonance
// Horizon
