import React from "react";

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
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,