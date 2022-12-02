import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { routes } from "@router/router.routes";
import { AppLayout } from "./layouts";
import { NotFoundPage } from "@pages";
import paths from "@router/router.paths";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to={paths.PATH_DASHBOARD} />} />
          <Route element={<AppLayout />}>
            {routes.map((route) => (
              <Route
                path={route.path}
                element={route.element}
                key={route.path}
              />
            ))}
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
