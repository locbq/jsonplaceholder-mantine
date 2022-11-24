import loadable from "@loadable/component";

export const HomePage = loadable(async () => await import("./home-page"));
