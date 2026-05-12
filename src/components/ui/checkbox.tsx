import { useEffect, useRef, useState } from "react";

type Density = 'compact' | 'default' | 'comfortable';

const densitySpacing: Record<Density, string> = {
  compact: 'var(--space-12)',
  default: 'var(--space-20)',
  comfortable: 'var(--space-24)',
};

interface CheckboxProps {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;
  density?: Density;
  onChange?: (checked: boolean) => void;
}

export const Checkbox = ({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  readOnly = false,
  error = false,
  errorMessage,
  density,
  onChange,
}: CheckboxProps) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) inputRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const interactive = !disabled && !readOnly;
  const isChecked = checked || indeterminate;

  let bg = "var(--bg-0)";
  let borderColor = "var(--input-divider)";
  let borderWidth = "1px";
  let boxShadow = "none";

  if (disabled) {
    bg = isChecked ? "var(--action)" : "var(--bg-2)";
    borderColor = isChecked ? "var(--action)" : "var(--disabled)";
  } else if (readOnly) {
    bg = isChecked ? "var(--subtle-and-hint)" : "var(--bg-1)";
    borderColor = "var(--divider)";
  } else {
    if (isChecked) {
      bg = "var(--action)";
      borderColor = "var(--action)";
    }
    if (error) {
      borderColor = "var(--error-warning)";
      borderWidth = isChecked ? "1px" : "2px";
    }
    if (focused) {
      boxShadow = "var(--shadow-focus)";
    } else if (hovered) {
      boxShadow = "0 0 0 4px var(--action-25)";
      if (!error) {
        if (isChecked) {
          bg = "var(--action-dark-5)";
          borderColor = "var(--action-dark-5)";
        } else {
          borderColor = "var(--action)";
        }
      }
    }
  }

  const iconColor =
    disabled
      ? "var(--bg-0)"
      : readOnly
      ? "var(--divider)"
      : "var(--primary-on-action)";

  return (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: "var(--space-4)", marginBottom: density ? densitySpacing[density] : undefined }}>
      <label
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "var(--space-8)",
          fontFamily: "var(--font-family-body)",
          fontSize: "var(--font-size-paragraph-2)",
          color: disabled ? "var(--disabled)" : "var(--default)",
          cursor: disabled ? "not-allowed" : readOnly ? "default" : "pointer",
          opacity: disabled ? 0.5 : 1,
        }}
        onMouseEnter={() => { if (interactive) setHovered(true); }}
        onMouseLeave={() => { if (interactive) setHovered(false); }}
      >
        <div
          style={{
            position: "relative",
            width: "var(--space-20)",
            height: "var(--space-20)",
            flexShrink: 0,
          }}
        >
          <input
            ref={inputRef}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            readOnly={!interactive}
            onChange={interactive ? (e) => onChange?.(e.target.checked) : undefined}
            onFocus={() => { if (interactive) setFocused(true); }}
            onBlur={() => setFocused(false)}
            style={{
              position: "absolute",
              inset: 0,
              opacity: 0,
              margin: 0,
              width: "100%",
              height: "100%",
              cursor: disabled ? "not-allowed" : readOnly ? "default" : "pointer",
              zIndex: 1,
            }}
          />
          <div
            aria-hidden
            style={{
              width: "var(--space-20)",
              height: "var(--space-20)",
              borderRadius: "var(--corner-radius-small)",
              background: bg,
              border: `${borderWidth} solid ${borderColor}`,
              boxShadow,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              transition: "box-shadow 0.15s, background 0.15s, border-color 0.15s",
              pointerEvents: "none",
            }}
          >
            {indeterminate ? (
              <svg width="8" height="2" viewBox="0 0 8 2" fill="none">
                <rect width="8" height="2" rx="1" fill={iconColor} />
              </svg>
            ) : checked ? (
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path
                  d="M1 4L3.5 6.5L9 1"
                  stroke={iconColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </div>
        </div>
        {label}
      </label>
      {error && errorMessage && !disabled && (
        <span
          style={{
            fontFamily: "var(--font-family-header)",
            fontSize: "var(--font-size-header-6)",
            fontWeight: 700,
            color: "var(--subtle-and-hint)",
            paddingLeft: "calc(var(--space-20) + var(--space-8))",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
