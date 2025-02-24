import {useState} from "react";

const HoverPopover = ({ children }: any) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "lightgoldenrodyellow",
        padding: "20px",
        position: "relative",
      }}
    >
      <div className={`popover-test ${hovered ? "visible" : "hidden"}`}>
        helper text
      </div>
      {children}
    </div>
  );
};

export default HoverPopover;
