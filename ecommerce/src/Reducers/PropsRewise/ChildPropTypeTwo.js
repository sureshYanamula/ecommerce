import React from "react";

function ChildPropTypeTwo(props) {
  const { name, dataOne } = props;
  return (
    <div>
      <h1>{name}</h1>
      {dataOne.length ? dataOne.map((item) => <h3>{item.age}</h3>) : null}
    </div>
  );
}

export default ChildPropTypeTwo;
