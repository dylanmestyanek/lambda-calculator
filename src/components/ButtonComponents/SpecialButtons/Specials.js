import React, { useState } from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

export const Specials = (props) => {
  const [specialState] = useState(specials);
  const { specialOperators } = props;
  return (
    <div className="specials">
      {specialState.map((item, index) => <SpecialButton value={item} key={index} specialOperators={specialOperators} />)}
    </div>
  );
};
