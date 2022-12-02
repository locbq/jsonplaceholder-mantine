import { Navbar, Title } from "@mantine/core";

import { NavLink } from "./components";
import { navLinks } from "./Sidebar.constants";

export default function Sidebar() {
  return (
    <Navbar width={{ base: 250 }} height="100vh" p="xs">
      <Navbar.Section
        p="xs"
        sx={(theme) => ({
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        })}
      >
        <Title order={4}>JSONPLACEHOLDER</Title>
      </Navbar.Section>
      {navLinks.map((link) => (
        <Navbar.Section key={link.title} pt="xs" px="xs">
          <NavLink icon={link.icon} path={link.path} title={link.title} />
        </Navbar.Section>
      ))}
    </Navbar>
  );
}
