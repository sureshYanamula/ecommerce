import React from "react";

function ChildProps(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      {props.dataOne.map((item) => (
        <h6>{item.name}</h6>
      ))}
    </div>
  );
}

export default ChildProps;
