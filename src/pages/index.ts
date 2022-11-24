import loadable from "@loadable/component";

export const HomePage = loadable(async () => await import("./home-page"));

// NOT FOUND PAGE
export const NotFoundPage = loadable(
  async () => await import("./not-found-page")
);
