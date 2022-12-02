import paths from "./router.paths";
import {
  DashboardPage,
  UserPage,
  PostPage,
  CommentPage,
  AlbumPage,
  TodosPage
} from "@pages";

export const routes = [
  {
    title: "Dashboard",
    path: paths.PATH_DASHBOARD,
    element: <DashboardPage />
  },
  {
    title: "User",
    path: paths.PATH_USER,
    element: <UserPage />
  },
  {
    title: "Post",
    path: paths.PATH_POST,
    element: <PostPage />
  },
  {
    title: "Comment",
    path: paths.PATH_COMMENT,
    element: <CommentPage />
  },
  {
    title: "Album",
    path: paths.PATH_ALBUM,
    element: <AlbumPage />
  },
  {
    title: "Todos",
    path: paths.PATH_TODOS,
    element: <TodosPage />
  }
];
