import React from "react";

export const OperatorButton = (props) => {
  const { value, char, calculations} = props;
  return (
    <button value={value} onClick={() => calculations(value)}>{char}</button>
  );
};
