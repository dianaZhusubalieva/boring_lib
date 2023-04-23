import React, { useState } from "react";
import "./styles.scss";
import Dialog from "./Dialog";
import MyTransition from "./transition/MyTransition";

const CornerDialog = ({ open }) => {
  return (
    <Dialog isOpen={open}>
      <div></div>
    </Dialog>
  );
};

const Components = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [openTest, setOpenTest] = useState(false);
  return (
    <div className={"components-wrapper"}>
      <div className={"components-content"}>
        <div className={"grid-container"}>
          <button
            onClick={() => setIsDialogOpen(!isDialogOpen)}
            className={"basic-button"}
          >
            open modal dialog
          </button>

          <button
            className={"basic-button"}
            onClick={() => setOpenTest(!openTest)}
          >
            open block
          </button>
        </div>
        <MyTransition in={openTest}>
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
