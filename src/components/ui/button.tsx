import React, { useState } from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "tertiary";
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  label,
  variant = "primary",
  disabled = false,
  onClick,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const base: React.CSSProperties = {
    display:         "inline-flex",
    alignItems:      "center",
    justifyContent:  "center",
    height:          "var(--button-height)",
    padding:         "0 var(--space-16)",
    borderRadius:    "var(--corner-radius-small)",
    fontFamily:      "var(--font-family-header)",
    fontSize:        "var(--font-size-header-5)",
    fontWeight:      700,
    cursor:          disabled ? "not-allowed" : "pointer",
    opacity:         disabled ? 0.5 : 1,
    transition:      "background 0.15s, color 0.15s",
    border:          "none",
  };

  const primary: React.CSSProperties = {
    ...base,
    backgroundColor: hovered && !disabled ? "var(--action-dark-5)" : "var(--action)",
    color:           "var(--primary-on-action)",
  };

  const secondary: React.CSSProperties = {
    ...base,
    backgroundColor: hovered && !disabled ? "var(--action-5)" : "transparent",
    color:           "var(--action)",
    border:          "2px solid var(--action)",
  };

  const tertiary: React.CSSProperties = {
    ...base,
    backgroundColor: hovered && !disabled ? "var(--action-5)" : "transparent",
    color:           disabled ? "var(--disabled)" : "var(--action)",
    border:          "none",
  };

  const styleMap = { primary, secondary, tertiary };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={styleMap[variant]}
    >
      {label}
    </button>
  );
};

export default Button;
