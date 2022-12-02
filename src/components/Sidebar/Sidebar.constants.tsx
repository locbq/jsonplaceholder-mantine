import {
  IconHome,
  IconUser,
  IconFileText,
  IconMessageCircle,
  IconPhoto,
  IconCheckbox
} from "@tabler/icons";

import paths from "@router/router.paths";

export const navLinks = [
  {
    title: "Dashboard",
    icon: <IconHome strokeWidth="1.5" />,
    path: paths.PATH_DASHBOARD
  },
  {
    title: "User",
    icon: <IconUser strokeWidth="1.5" />,
    path: paths.PATH_USER
  },
  {
    title: "Post",
    icon: <IconFileText strokeWidth="1.5" />,
    path: paths.PATH_POST
  },
  {
    title: "Comment",
    icon: <IconMessageCircle strokeWidth="1.5" />,
    path: paths.PATH_COMMENT
  },
  {
    title: "Album",
    icon: <IconPhoto strokeWidth="1.5" />,
    path: paths.PATH_ALBUM
  },
  {
    title: "Todos",
    icon: <IconCheckbox strokeWidth="1.5" />,
    path: paths.PATH_TODOS
  }
];
