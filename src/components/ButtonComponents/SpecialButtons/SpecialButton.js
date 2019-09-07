import React from "react";

export const SpecialButton = (props) => {
  const { value } = props;
  return (
    <button value={value}>{value}</button>
    );
};
