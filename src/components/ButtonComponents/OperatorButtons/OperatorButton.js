import React from "react";

export const OperatorButton = (props) => {
  const { value, char, setOperator} = props;
  return (
    <button value={value} onClick={() => setOperator(value)}>{char}</button>
  );
};
