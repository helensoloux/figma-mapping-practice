import React from "react";

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
  return (
    <label
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
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
        style={{
          accentColor: "var(--action)",
          width: "16px",
          height: "16px",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {label}
    </label>
  );
};

export default Checkbox;