import React from "react";

interface Option {
  label: string;
  value: any;
}

interface Props {
  options: Option[];
}
const MultiSelect: React.FC<Props> = ({ options }) => {
  return <div></div>;
};

export default MultiSelect;
