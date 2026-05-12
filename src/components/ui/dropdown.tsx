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

const ChevronDown = ({ color }: { color: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ display: "block", flexShrink: 0 }}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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
        gap: "var(--space-4)",
        fontFamily: "var(--font-family-body)",
      }}
    >
      {label && (
        <label
          style={{
            fontFamily: "var(--font-family-header)",
            fontSize: "var(--font-size-header-5)",
            fontWeight: 700,
            color: disabled ? "var(--subtle-and-hint)" : "var(--default)",
          }}
        >
          {label}
        </label>
      )}
      <div style={{ position: "relative" }}>
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(e.target.value)}
          style={{
            fontFamily: "var(--font-family-body)",
            fontSize: "var(--font-size-paragraph-2)",
            color: disabled ? "var(--subtle-and-hint)" : "var(--default)",
            background: disabled ? "var(--bg-2)" : "var(--bg-0)",
            border: error
              ? "2px solid var(--error-warning)"
              : "1px solid var(--input-divider)",
            borderRadius: "var(--corner-radius-small)",
            height: "36px",
            padding: error ? "9px 35px 9px 11px" : "10px 36px 10px 12px",
            width: "100%",
            appearance: "none",
            WebkitAppearance: "none",
            cursor: disabled ? "not-allowed" : "pointer",
            outline: "none",
            boxSizing: "border-box",
          }}
        >
          {options.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <div
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronDown color={disabled ? "var(--disabled)" : "var(--subtle-and-hint)"} />
        </div>
      </div>
      {error && errorMessage && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--space-4)",
            fontSize: "var(--font-size-caption)",
            color: "var(--subtle-and-hint)",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
            <circle cx="6" cy="6" r="6" fill="var(--error-warning)" />
            <rect x="5.25" y="3" width="1.5" height="4" rx="0.75" fill="white" />
            <circle cx="6" cy="8.75" r="0.75" fill="white" />
          </svg>
          {errorMessage}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
