import paths from "./router.paths";
import { HomePage } from "@pages";

export const routes = [
  {
    title: "Home",
    path: paths.PATH_BASE,
    element: <HomePage />
  }
];
