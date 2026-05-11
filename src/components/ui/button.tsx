import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: variant === "primary" ? "var(--action)" : "transparent",
        color: variant === "primary" ? "var(--primary-on-action)" : "var(--action)",
        fontFamily: "var(--font-family-body)",
        fontSize: "var(--font-size-paragraph-1)",
        borderRadius: "var(--corner-radius-medium)",
        padding: "12px 24px",
        border: variant === "primary" ? "none" : "2px solid var(--action)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      {label}
    </button>
  );
};

export default Button;