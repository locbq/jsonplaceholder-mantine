import paths from "./router.paths";
import {
  DashboardPage,
  UserPage,
  UserCreatePage,
  UserEditPage,
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
    title: "User Create",
    path: paths.PATH_USER_CREATE,
    element: <UserCreatePage />
  },
  {
    title: "User Edit",
    path: paths.PATH_USER_EDIT,
    element: <UserEditPage />
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
