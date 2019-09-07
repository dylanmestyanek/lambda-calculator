import React from "react";

export const NumberButton = (props) => {
  const { value } = props;
  return (
    <button value={value}>{value}</button>
  );
};
