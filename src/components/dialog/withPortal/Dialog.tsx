import "components/dialog/withPortal/styles.scss";
import Portal from "./Portal";

const Dialog = ({ isOpen, children }:any) => {
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
