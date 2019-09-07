import React, { useState } from "react";
import { operators } from '../../../data';
import { OperatorButton } from "./OperatorButton";

export const Operators = (props) => {
  const [operatorState] = useState(operators);
  const { addNums } = props;
  return (
    <div className="operators">
      {operatorState.map((operator, index) => <OperatorButton addNums={addNums} value={operator.value} char={operator.char} key={index} />)}
    </div>
  );
};
