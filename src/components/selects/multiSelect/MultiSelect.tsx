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
    const [selectedValues, setSelectedValues] = useState(values);

    function handleOptionSelect(value: any) {
      console.log("onchange");
      const newSelectedValues = [...selectedValues];
      const index = selectedValues.indexOf(value);
      if (index === -1) {
        newSelectedValues.push(value);
      } else {
        newSelectedValues.splice(index, 1);
      }

      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    }

    return (
      <>
        <Popover
          content={
            <div className="multiselect-popover-wrapper">
              {options.map((option) => (
                <label key={option.value}>
                  <span>{option.label}</span>
                  <input
                    name="multiSelect"
                    type="checkbox"
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => handleOptionSelect(option.value)}
                  />
                </label>
              ))}
            </div>
          }
        >
          <div
            onClick={() => setIsOpen(!isOpen)}
            className={clsx("custom-select", { "custom-select__open": isOpen })}
          >
            <div className={"select-placeholder"}>
              {values.length ? values.length + " elems chosen" : placeholder}
            </div>
            <span className={"select-arrow"}>↓</span>
          </div>
        </Popover>
      </>
    );
  }
);

export default MultiSelect;
