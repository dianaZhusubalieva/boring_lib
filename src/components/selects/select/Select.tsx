import React, { memo, useState } from "react";
import SelectPopover from "components/selects/search-select/SelectPopover";
import "./styles.scss";
import clsx from "clsx";

interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
  onChange: (v: any) => void;
  placeholder?: string;
  value: string | number | readonly string[] | undefined | null;
}

const Select = memo(
  ({ value, options, onChange, placeholder = "Select..." }: Props) => {
    const findLabelByValue = (value: any) =>
      options.find((item) => item.value === value)?.label;

    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (selection: any) => {
      onChange(selection);
      setIsOpen(false);
    };

    return (
      <>
        <SelectPopover
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          content={
            <div className={"select-popover"}>
              {options.map((item, i) => (
                <span
                  className={"select-popover__item"}
                  key={i}
                  onClick={() => {
                    handleOptionClick(item.value);
                  }}
                >
                  {item.label}
                </span>
              ))}
            </div>
          }
        >
          <div
            className={clsx("custom-select", { "custom-select__open": isOpen })}
          >
            <div className={"select-placeholder"}>
              {findLabelByValue(value) || placeholder}
            </div>
            <span className={"select-arrow"}>↓</span>
          </div>
        </SelectPopover>
      </>
    );
  }
);

export default Select;
