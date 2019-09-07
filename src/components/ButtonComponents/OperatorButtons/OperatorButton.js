import React from "react";

export const OperatorButton = (props) => {
  const { value, char } = props;
  return (
    <button value={value}>{char}</button>
  );
};
