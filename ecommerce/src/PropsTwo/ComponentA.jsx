import React, { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
  const [des, setDes] = useState("I am Component A");

  const handleChangeText = () => {
    setDes("I am changed text of Component A");
  };

  return (
    <div>
      <ComponentB des={des} />
      {/* <h1>{des}</h1> */}
      <button onClick={handleChangeText}>Change Text</button>
    </div>
  );
}

export default ComponentA;
