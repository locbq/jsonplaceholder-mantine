import loadable from "@loadable/component";

export const DashboardPage = loadable(
  async () => await import("./dashboard-page")
);
export const UserPage = loadable(async () => await import("./user-page"));
export const PostPage = loadable(async () => await import("./post-page"));
export const CommentPage = loadable(async () => await import("./comment-page"));
export const AlbumPage = loadable(async () => await import("./album-page"));
export const TodosPage = loadable(async () => await import("./todos-page"));

// NOT FOUND PAGE
export const NotFoundPage = loadable(
  async () => await import("./not-found-page")
);
