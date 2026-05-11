import React from "react";

interface DropdownProps {
  label?: string;
  value?: string;
  options: string[];
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  onChange?: (value: string) => void;
}

export const Dropdown = ({
  label,
  value,
  options,
  disabled = false,
  error = false,
  errorMessage,
  onChange,
}: DropdownProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        fontFamily: "var(--font-family-body)",
      }}
    >
      {label && (
        <label
          style={{
            fontSize: "var(--font-size-caption)",
            color: "var(--default)",
          }}
        >
          {label}
        </label>
      )}
      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        style={{
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-paragraph-2)",
          color: disabled ? "var(--disabled)" : "var(--default)",
          borderColor: error ? "var(--error&warning)" : "var(--input-divider)",
          borderRadius: "var(--corner-radius-small)",
          padding: "8px 12px",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>