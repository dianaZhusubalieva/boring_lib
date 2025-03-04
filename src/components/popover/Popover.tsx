import { ReactNode, useRef, useState } from "react";
import "./styles.scss";
import MyTransition from "./../MyTransition/MyTransition";
import  useOutsideClick from "hooks/useOutsideClick";

interface Props {
  content: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
}

const Popover = ({ content, children }: Props) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useOutsideClick(ref, () => setIsVisible(false));

  return (
    <div className="popover-container" ref={ref}>
      <div
        className="popover-trigger"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        {children}
      </div>
      {isVisible && (
        <MyTransition in={isVisible}>
          <div className="popover-content">{content}</div>
        </MyTransition>
      )}
    </div>
  );
};

export default Popover;
