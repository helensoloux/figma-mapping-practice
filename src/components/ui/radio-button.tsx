
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
        gap: "var(--space-8)",
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
          width: "var(--space-16)",
          height: "var(--space-16)",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      />
      {label}
    </label>
  );
};

export default RadioButton;