import React from "react";

interface RadioButtonProps {
  label?: string;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (value: string) => void;
}

export const RadioButton = ({
  label,
  value = "",
  checked = false,
  disabled = false,
  onChange,
}: RadioButtonProps) => {
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
        type="radio"
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => onChange?.(value)}
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

export default RadioButton;