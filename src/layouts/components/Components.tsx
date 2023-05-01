import React, { useState } from "react";
import "./styles.scss";
import Dialog from "../../components/dialog/Dialog";
import MyTransition from "../../components/MyTransition/MyTransition";
import Popover from "../../components/popover/Popover";
import SearchSelect, {
  mockSelectOptions,
} from "../../components/selects/search-select/SearchSelect";
import Table from "components/table/Table";
import Select from "components/selects/select/Select";

const CornerDialog = ({ open }: any) => {
  return (
    <Dialog isOpen={open}>
      <div></div>
    </Dialog>
  );
};

const Button = ({ title, ...rest }: { title: string; onClick: () => void }) => (
  <button {...rest} className="basic-button">
    {title}
  </button>
);

const Components = () => {
  const [checkTransition, setCheckTransition] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  ///search-select
  const [selectedItemValue, setSelectedItemValue] = useState(null);
  const [basicSelectValue, setBasicSelectValue] = useState(null);

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
          <Popover
            content={
              <div>
                <span>hello</span>
              </div>
            }
          >
            <Button
              title={"open popover"}
              onClick={() => setIsPopoverOpen(!isPopoverOpen)}
            />
          </Popover>

          <SearchSelect
            onChange={(value) => setSelectedItemValue(value)}
            options={mockSelectOptions.map(({ id, subject }) => ({
              label: subject,
              value: id,
            }))}
            value={selectedItemValue}
          />

          <Table />

          <Select
            options={mockSelectOptions.map(({ id, subject }) => ({
              label: subject,
              value: id,
            }))}
            onChange={(selection) => {
              setBasicSelectValue(selection);
            }}
            value={basicSelectValue}
          />
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
