import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

import { routes } from "@router/router.routes";
import { AppLayout } from "./layouts";
import { NotFoundPage } from "@pages";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <Routes>
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
