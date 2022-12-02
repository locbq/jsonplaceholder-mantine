import { Outlet } from "react-router-dom";
import { AppShell } from "@mantine/core";

import { Sidebar, Header } from "@components";

export default function AppLayout() {
  return (
    <>
      <AppShell
        padding="md"
        layout="alt"
        navbar={<Sidebar />}
        header={<Header />}
      >
        <Outlet />
      </AppShell>
    </>
  );
}
