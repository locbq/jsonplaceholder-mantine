import { Link } from "react-router-dom";

import paths from "@router/router.paths";
import { Button } from "@components";

export default function NotFoundPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <p>404</p>
      <p>Not found</p>
      <Link to={paths.PATH_BASE}>
        <Button>Go back to home</Button>
      </Link>
    </main>
  );
}
