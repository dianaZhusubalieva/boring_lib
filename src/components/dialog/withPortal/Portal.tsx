import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}
const Portal = (props: Props) => {
  const { children } = props;

  const [mounted, setMounted] = useState(false);
  const ref = useRef<any>();

  useLayoutEffect(() => {
    setMounted(true);
    ref.current = document.createElement("div");
    ref.current.setAttribute("dialog-portal", "");

    document.body.appendChild(ref.current);
    document.body.classList.add("blur-body");

    return () => {
      document.body.removeChild(ref.current);
      document.body.classList.remove("blur-body");
    };
  }, []);

  if (!mounted) {
    return null;
  }

  return createPortal(children, ref.current);
};

export default Portal;
