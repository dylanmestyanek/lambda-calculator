import React from "react";

export const SpecialButton = (props) => {
  const { value, combineNums } = props;
  return (
    <button value={value} onCLick={() => combineNums()}>{value}</button>
    );
};
