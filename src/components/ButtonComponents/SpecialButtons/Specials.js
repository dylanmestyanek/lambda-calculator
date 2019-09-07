import React, { useState } from "react";
import { specials } from "../../../data";
import { SpecialButton } from "./SpecialButton";

export const Specials = () => {
  const [specialState] = useState(specials);

  return (
    <div>
      {specialState.map(item => <SpecialButton value={item} />)}
    </div>
  );
};
