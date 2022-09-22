import React from "react";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate (-50%, -50%)",
};

const Modal = ({ open, children, onClose }) => {
  if (!open) return null;
  return (
    <div style={MODAL_STYLES}>
      <button onClick={onClose}>close modal</button>
      {children}
    </div>
  );
};

export default Modal;
