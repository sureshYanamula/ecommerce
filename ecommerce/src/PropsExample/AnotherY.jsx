import React, { useState } from "react";
import ButtonComponent from "../core/Button";
import AnotherZ from "./AnotherZ";

const AnotherY = () => {
  const [usable, setUsable] = useState("right or wrong Mr ...?");

  const handleButton = (e) => {
    setUsable("Obviously yes right Mr...heheeh");
  };

  return (
    <div className="alert alert-success">
      <p>
        <AnotherZ used={usable} />
      </p>
      <button onClick={handleButton}>Click overHere</button>
    </div>
  );
};

export default AnotherY;
