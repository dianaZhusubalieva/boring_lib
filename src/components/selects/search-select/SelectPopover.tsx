import React, { ReactNode, useRef } from "react";
import "./styles.scss";
import useOutsideClick from "hooks/hooks";
import MyTransition from "components/MyTransition/MyTransition";

interface Props {
  content: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  setIsOpen: (v: boolean) => void;
}

const Popover = ({ content, children, isOpen, setIsOpen }: Props) => {
  const ref = useRef(null);
  useOutsideClick(ref, () => setIsOpen(false));

  return (
    <div className="popover-container" ref={ref}>
      <div
        className="popover-trigger"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {children}
      </div>
      {isOpen && (
        <MyTransition in={isOpen}>
          <div className="popover-content">{content}</div>
        </MyTransition>
      )}
    </div>
  );
};

export default Popover;
