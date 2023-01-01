import React, { useState } from "react";
import OnemoreB from "./OnemoreB";

const OnemoreComp = () => {
  const [comp, setComp] = useState("");

  const changingComp = () => {
    setComp("boohhhhh");
  };

  return (
    <div>
      <OnemoreB pomc={comp} />
      <button onClick={changingComp}>Touch for something</button>
    </div>
  );
};

export default OnemoreComp;
