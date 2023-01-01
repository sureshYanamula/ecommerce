import React, { useState } from "react";
import LastcompZ from "./LastcompZ";

const Lastcomp = () => {
  const [lastset, setLastset] = useState("smallest.....");

  const handlingLast = () => {
    setLastset("smallest volin ");
  };

  return (
    <div>
      <LastcompZ set={lastset} />
      <button onClick={handlingLast}>^_^</button>
    </div>
  );
};

export default Lastcomp;
