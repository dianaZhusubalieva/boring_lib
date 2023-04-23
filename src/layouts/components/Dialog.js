import Portal from "./Portal";

const Dialog = ({ isOpen, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <Portal>
      <div className={"dialog-wrapper"}> {children}</div>
    </Portal>
  );
};

export default Dialog;
