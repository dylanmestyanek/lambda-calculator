import React from "react";

export const NumberButton = (props) => {
  const { value, setTotal } = props;
  return (
    <button value={value} onClick={() => setTotal(value)}>{value}</button>
  );
};
