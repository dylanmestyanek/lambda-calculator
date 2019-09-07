import React, { useState } from "react";
import { numbers } from "../../../data";
import { NumberButton } from "./NumberButton";

export const Numbers = () => {
  const [numberState] = useState(numbers);
  return (
    <div>
       {numberState.map(number => <NumberButton value={number} />)}
    </div>
  );
};
