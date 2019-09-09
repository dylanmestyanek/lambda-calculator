import React from "react";

export const SpecialButton = (props) => {
  const { value, specialOperators } = props;
  return (
    <button value={value} onClick={() => specialOperators(value)}>{value}</button>
    );
};
