import React from "react";

const ExampleChild = (props) => {
  const { komponents } = props;
  return (
    <div>
      {komponents.length >= 1 &&
        komponents.map((item, index) => (
          <h3 key={index}>
            {item.key}
            {item.value}
          </h3>
        ))}
    </div>
  );
};

export default ExampleChild;
