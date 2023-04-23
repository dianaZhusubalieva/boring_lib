import React, { useState } from "react";
import "./styles.scss";
import Dialog from "./Dialog";

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
      <Dialog isOpen={isDialogOpen}>
        <div>
          <h2>my dialog</h2>
        </div>
      </Dialog>
    </div>
  );
};

export default Components;
