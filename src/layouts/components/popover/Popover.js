import React, { useRef, useState } from "react";
import "./styles.scss";
import useOutsideClick from "../../../hooks/hooks";

const Popover = ({ content, children }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useOutsideClick(ref, () => setIsVisible(false));
  return (
    <div className="popover-container" ref={ref}>
      <div className="popover-trigger" onClick={() => setIsVisible(!isVisible)}>
        {children}
      </div>
      {isVisible && <div className="popover-content">{content}</div>}
    </div>
  );
};

export default Popover;
