import React, { useState } from "react";
import { operators } from '../../../data';
import { OperatorButton } from "./OperatorButton";

export const Operators = () => {
  const [operatorState] = useState(operators)
  return (
    <div>
      {operatorState.map(operator => <OperatorButton value={operator.value} char={operator.char} />)}
    </div>
  );
};
