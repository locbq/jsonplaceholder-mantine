import { ActionIcon, ActionIconProps } from "@mantine/core";
import { IconEye, IconPencil, IconTrash } from "@tabler/icons";
import { MouseEvent } from "react";

interface ActionButtonProps extends ActionIconProps {
  actionType: "view" | "edit" | "delete";
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export default function ActionButton({
  actionType,
  onClick,
  ...props
}: ActionButtonProps) {
  const renderIcon = () => {
    if (actionType === "view") return <IconEye strokeWidth="1.5" size={16} />;
    if (actionType === "edit")
      return <IconPencil strokeWidth="1.5" size={16} />;
    if (actionType === "delete")
      return <IconTrash strokeWidth="1.5" size={16} />;
    return <></>;
  };

  return (
    <ActionIcon variant="filled" onClick={onClick} {...props}>
      {renderIcon()}
    </ActionIcon>
  );
}
