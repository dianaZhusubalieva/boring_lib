import React, { memo, useState } from "react";
import "./styles.scss";
import clsx from "clsx";
import Popover from "components/popover/Popover";

interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
  onChange: (v: any) => void;
  placeholder?: string;
  values: any[];
}

const MultiSelect = memo(
  ({ values, options, onChange, placeholder = "Select..." }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selection: any) => {
      if (values.includes(selection)) {
        onChange(values.filter((option) => option !== selection));
      } else {
        onChange([...values, selection]);
      }
    };
    console.log(values);
    return (
      <>
        <Popover
          content={
            <div className={"multiselect-popover-wrapper"}>
              {options.map(({ label, value }, i) => (
                <div
                  key={i}
                  className={"multiselect_item"}
                  onClick={() => handleOptionClick(value)}
                >
                  <span>{label}</span>
                  <input
                    name="multiselect"
                    type={"radio"}
                    value={value}
                    checked={values.includes(value)}
                    onChange={() => {}}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOptionClick(value);
                    }}
                  />
                </div>
              ))}
            </div>
          }
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("custom-select", { "custom-select__open": isOpen })}
          >
            <div className={"select-placeholder"}>{values.length}</div>
            <span className={"select-arrow"}>↓</span>
          </div>
        </Popover>
      </>
    );
  }
);

export default MultiSelect;
