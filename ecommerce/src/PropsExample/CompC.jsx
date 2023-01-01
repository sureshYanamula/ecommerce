import React, { useState } from "react";
import CompA from "./CompA";
import CompB from "./CompB";

const CompC = () => {
  const [world, setWorld] = useState("I'll blow up into smithereens");
  const [worlds, setWorlds] = useState(
    "omg that's so insane..omg that's such a shame"
  );

  const changingB = () => {
    setWorld("while tryna put my mind at ease");
    console.log("omg worked", world);
  };

  const changingA = () => {
    setWorlds("but i can't help myself from feeling bad ");
    console.log("omg worked again", worlds);
  };

  return (
    <div>
      <CompB data={world} />
      <button onClick={changingB}>CompB</button>

      <CompA worlds={worlds} />
      <button onClick={changingA}>CompA</button>
    </div>
  );
};

export default CompC;
