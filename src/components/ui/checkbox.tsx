import React, { useState } from "react";

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked = false,
  disabled = false,
  onChange,
}: CheckboxProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-8)",
        fontFamily: "var(--font-family-body)",
        fontSize: "var(--font-size-paragraph-2)",
        color: disabled ? "var(--disabled)" : "var(--default)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          accentColor: "var(--action)",
          width: "var(--space-16)",
          height: "var(--space-16)",
          borderRadius: "var(--corner-radius-small)",
          cursor: disabled ? "not-allowed" : "pointer",
          outline: hovered && !disabled ? "2px solid var(--action)" : "none",
          outlineOffset: "2px",
          transition: "outline 0.15s",
        }}
      />
      {label}
    </label>
  );
};

export default Checkbox;
