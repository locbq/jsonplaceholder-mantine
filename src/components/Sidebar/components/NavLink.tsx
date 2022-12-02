import { NavLink as OGNavLink } from "react-router-dom";
import { UnstyledButton, Group, Text } from "@mantine/core";
import { ReactNode } from "react";

interface NavLinkProps {
  icon: ReactNode;
  title: string;
  path: string;
}

export default function NavLink({ icon, title, path }: NavLinkProps) {
  return (
    <OGNavLink
      className={({ isActive }) => (isActive ? "active-link" : undefined)}
      to={path}
    >
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color: theme.colors.blue[6],
          "&:hover": {
            backgroundColor: theme.colors.blue[4],
            color: theme.white,
            transition: "0.15s ease-in-out"
          }
        })}
      >
        <Group>
          {icon}

          <Text size="sm">{title}</Text>
        </Group>
      </UnstyledButton>
    </OGNavLink>
  );
}
