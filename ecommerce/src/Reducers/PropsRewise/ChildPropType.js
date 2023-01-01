import React from "react";

function ChildPropType({ name, dataOne, handleCourse }) {
  const handleChildPropCourse = () => {
    handleCourse();
  };

  return (
    <div>
      <h1>{name}</h1>
      {dataOne.length ? dataOne.map((item) => <h3>{item.age}</h3>) : null}
      <button onClick={handleChildPropCourse}>Hide course details</button>
    </div>
  );
}

export default ChildPropType;
