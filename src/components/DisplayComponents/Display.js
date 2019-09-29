import React from "react";
import "../../App.css";

export const Display = (props) => {
  const { value } = props;
  return <div className="displayContainer">{value}</div>;
};
