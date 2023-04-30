import React, { useState, useEffect } from "react";
import "./styles.scss";

const MyTransition = ({ in: inProp, duration = 200, children }) => {
  const [isVisible, setIsVisible] = useState(inProp);

  useEffect(() => {
    if (inProp) {
      setIsVisible(true);
    }
  }, [inProp]);

  const onAnimationEnd = () => {
    if (!inProp) {
      setIsVisible(false);
    }
  };

  const style = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: inProp ? 1 : 0,
    visibility: isVisible ? "visible" : "hidden",
    height: "fit-content",
  };

  return (
    <div
      className={inProp ? "my-transition-styles" : ""}
      style={style}
      onAnimationEnd={onAnimationEnd}
    >
      {children}
    </div>
  );
};

export default MyTransition;
