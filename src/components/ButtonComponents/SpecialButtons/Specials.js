import React, { useState } from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

export const Specials = () => {
  const [specialState] = useState(specials);

  return (
    <div className="specials">
      {specialState.map((item, index) => <SpecialButton value={item} key={index}/>)}
    </div>
  );
};
