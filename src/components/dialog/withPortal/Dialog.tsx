import Portal from "components/dialog/withPortal/Portal";
import "components/dialog/withPortal/styles.scss";

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
