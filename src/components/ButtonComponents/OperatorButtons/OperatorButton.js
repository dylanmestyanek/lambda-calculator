import React from "react";

export const OperatorButton = (props) => {
  const { value, char, addNums} = props;
  return (
    <button value={value} onClick={() => addNums(value)}>{char}</button>
  );
};
