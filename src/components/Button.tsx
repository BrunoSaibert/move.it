import { ButtonHTMLAttributes } from "react";

import styles from "../styles/components/Button.module.css";

export type Button = ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function Button({
  children,
  type = "button",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      {...props}
      className={`${styles.buttomContainer} ${className}`}
    >
      {children}
    </button>
  );
}
