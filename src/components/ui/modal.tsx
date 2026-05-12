import React, { useState } from "react";

interface ModalProps {
  title?: string;
  description?: string;
  isOpen?: boolean;
  onClose?: () => void;
  primaryLabel?: string;
  secondaryLabel?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
  children?: React.ReactNode;
}

export const Modal = ({
  title,
  description,
  isOpen = false,
  onClose,
  primaryLabel = "Confirm",
  secondaryLabel = "Cancel",
  onPrimary,
  onSecondary,
  children,
}: ModalProps) => {
  const [primaryHovered, setPrimaryHovered] = useState(false);
  const [secondaryHovered, setSecondaryHovered] = useState(false);

  if (!isOpen) return null;

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.(); }}
      style={{
        position: "fixed",
        inset: "var(--space-0)",
        background: "var(--overlay)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "var(--space-24)",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "var(--bg-0)",
          borderRadius: "var(--corner-radius-small)",
          boxShadow: "var(--shadow-regular)",
          padding: "var(--modal-padding)",
          width: "100%",
          maxWidth: "var(--modal-width-m)",
        }}
      >
        {(title || onClose) && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "var(--space-8)",
            }}
          >
            {title && (
              <h2
                style={{
                  fontFamily: "var(--font-family-header)",
                  fontSize: "var(--font-size-header-3)",
                  fontWeight: 700,
                  color: "var(--default)",
                  margin: 0,
                }}
              >
                {title}
              </h2>
            )}
            {onClose && (
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "var(--space-20)",
                  height: "var(--space-20)",
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  color: "var(--subtle-and-hint)",
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M1 1L11 11M11 1L1 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            )}
          </div>
        )}
        {description && (
          <p
            style={{
              fontFamily: "var(--font-family-body)",
              fontSize: "var(--font-size-paragraph-2)",
              color: "var(--subtle-and-hint)",
              marginBottom: "var(--space-24)",
            }}
          >
            {description}
          </p>
        )}
        {children && (
          <div style={{ marginBottom: "var(--space-24)" }}>{children}</div>
        )}
        <div
          style={{
            display: "flex",
            gap: "var(--space-8)",
            justifyContent: "flex-end",
          }}
        >
          <button
            onClick={onSecondary ?? onClose}
            onMouseEnter={() => setSecondaryHovered(true)}
            onMouseLeave={() => setSecondaryHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "var(--space-8) var(--space-24)",
              height: "var(--space-36)",
              borderRadius: "var(--corner-radius-small)",
              fontFamily: "var(--font-family-body)",
              fontSize: "var(--font-size-paragraph-2)",
              fontWeight: 500,
              background: secondaryHovered ? "var(--action-5)" : "transparent",
              color: "var(--action)",
              border: "2px solid var(--action)",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            {secondaryLabel}
          </button>
          <button
            onClick={onPrimary}
            onMouseEnter={() => setPrimaryHovered(true)}
            onMouseLeave={() => setPrimaryHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "var(--space-8) var(--space-24)",
              height: "var(--space-36)",
              borderRadius: "var(--corner-radius-small)",
              fontFamily: "var(--font-family-body)",
              fontSize: "var(--font-size-paragraph-2)",
              fontWeight: 500,
              background: primaryHovered ? "var(--action-dark-5)" : "var(--action)",
              color: "var(--primary-on-action)",
              border: "none",
              cursor: "pointer",
              transition: "background 0.15s",
            }}
          >
            {primaryLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
