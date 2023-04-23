import React, { useState } from "react";
import "./styles.scss";
import Dialog from "./Dialog";

const CornerDialog = ({ open }) => {
  return (
    <Dialog isOpen={open}>
      <div></div>
    </Dialog>
  );
};

const Components = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div className={"components-wrapper"}>
      <div className={"components-content"}>
        <button
          onClick={() => setIsDialogOpen(!isDialogOpen)}
          className={"basic-button"}
        >
          open modal dialog
        </button>
      </div>
      <CornerDialog open={isDialogOpen} />
    </div>
  );
};

export default Components;
