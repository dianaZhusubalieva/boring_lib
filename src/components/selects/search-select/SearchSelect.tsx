import React, { ChangeEvent, memo, useState } from "react";
import "components/selects/search-select/styles.scss";
import SelectPopover from "components/selects/search-select/SelectPopover";

export const mockSelectOptions: { subject: string; id: number }[] = [
  {
    subject: "javascript",
    id: 1,
  },
  {
    subject: "c++",
    id: 2,
  },
  {
    subject: "java",
    id: 3,
  },
];

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

const SearchSelect = memo(
  ({ value, options, onChange, placeholder }: Props) => {
    const findLabelByValue = (value: any) =>
      options.find((item) => item.value === value)?.label;

    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
      setIsOpen(true);
      const filtered = options.filter(({ label }) =>
        label.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setFilteredOptions(filtered);
      onChange(null);
    };

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
              {filteredOptions.length
                ? filteredOptions.map((item, i) => (
                    <span
                      className={"select-popover__item"}
                      key={i}
                      onClick={() => {
                        handleOptionClick(item.value);
                      }}
                    >
                      {item.label}
                    </span>
                  ))
                : "no results..."}
            </div>
          }
        >
          <input
            value={findLabelByValue(value) || inputValue}
            onChange={handleInputChange}
            placeholder={placeholder || "choose item"}
            className={"basic-input"}
          />
        </SelectPopover>
      </>
    );
  }
);

export default SearchSelect;
