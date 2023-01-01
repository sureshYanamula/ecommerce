import React from "react";
import AnotherX from "./AnotherX";

const AnotherZ = (props) => {
  const { used } = props;

  return (
    <div>
      <AnotherX used={used} />
    </div>
  );
};

export default AnotherZ;
