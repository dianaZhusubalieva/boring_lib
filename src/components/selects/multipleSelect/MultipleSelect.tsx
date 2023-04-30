import React from "react";

interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
}
const MultipleSelect: React.FC<Props> = ({ options }) => {
  return <div></div>;
};

export default MultipleSelect;
