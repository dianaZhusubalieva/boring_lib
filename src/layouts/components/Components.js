import React, { useState } from "react";
import "./styles.scss";
import Dialog from "./Dialog";
import MyTransition from "./MyTransition/MyTransition";
import Popover from "./popover/Popover";

const CornerDialog = ({ open }) => {
  return (
    <Dialog isOpen={open}>
      <div></div>
    </Dialog>
  );
};

const Button = ({ title, ...rest }) => (
  <button {...rest} className="basic-button">
    {title}
  </button>
);

const Components = () => {
  const [checkTransition, setCheckTransition] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  return (
    <div className={"components-wrapper"}>
      <div className={"components-content"}>
        <div className={"grid-container"}>
          <Button
            title={"open modal dialog"}
            onClick={() => setIsDialogOpen(!isDialogOpen)}
          />
          <Button
            title={"see transition"}
            onClick={() => setCheckTransition(!checkTransition)}
          />
          <Popover content={<div><span>hello</span></div>}>

            <Button
                title={"open popover"}
                onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            />
          </Popover>
        </div>

        <MyTransition in={checkTransition}>
          <div
            style={{ background: "blue", width: "100px", height: "50px" }}
          ></div>
        </MyTransition>
      </div>
      <CornerDialog open={isDialogOpen} />
    </div>
  );
};

export default Components;
