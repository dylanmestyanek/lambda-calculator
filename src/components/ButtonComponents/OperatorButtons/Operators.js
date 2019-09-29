import React, { useState } from "react";
import { operators } from '../../../data';
import { OperatorButton } from "./OperatorButton";

export const Operators = (props) => {
  const [operatorState] = useState(operators);
  const { calculations } = props;
  return (
    <div className="operators">
      {operatorState.map((operator, index) => <OperatorButton calculations={calculations} value={operator.value} char={operator.char} key={index} />)}
    </div>
  );
};
