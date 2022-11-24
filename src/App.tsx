import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "@router/router.routes";
import { AppLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} key={route.path} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
