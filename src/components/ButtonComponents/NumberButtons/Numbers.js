import React, { useState } from "react";
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";

export const Numbers = (props) => {
  const [numberState] = useState(numbers);
  const { setTotal } = props;
  return (
    <div className="numbers">
       {numberState.map((number,index) => <NumberButton value={number} key={index} setTotal={setTotal} />)}
    </div>
  );
};
