import React from "react";
import ComponentC from "./ComponentC";

function ComponentB(props) {
  const { des } = props;
  return (
    <div>
      <h1>{des}</h1>
      <ComponentC des={des} />
    </div>
  );
}

export default ComponentB;
