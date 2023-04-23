import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const Portal = (props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);
  const ref = useRef();

  useLayoutEffect(() => {
    console.log("in useIsomorphicLayoutEffect");
    setMounted(true);
    ref.current = document.createElement("div");
    ref.current.setAttribute("dialog-portal-container", "");

    document.body.appendChild(ref.current);
    console.log("mounted", mounted);
    return () => {
      console.log("in return");
      document.body.removeChild(ref.current);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, ref.current);
};

export default Portal;
