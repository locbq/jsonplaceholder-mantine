import { ComponentPropsWithoutRef } from "react";
import clsx from "clsx";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  loading?: boolean;
}

export default function Button({
  loading = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded",
        !className?.includes("px-") && "px-3",
        !className?.includes("py-") && "py-2",
        className
      )}
      disabled={loading}
      {...props}
    >
      {loading && "Loading"}
      {children}
    </button>
  );
}
