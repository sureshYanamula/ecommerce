import React, { useState, useEffect } from "react";

const ChecksAndForms = () => {
  const [vegitables, setVegitables] = useState([
    "bitterGaurd",
    "potato",
    "tomato",
    "radish",
    "cucumber",
  ]);
  const [selectedVegitable, setSelectedVegitable] = useState("radish");

  const handleVegitables = (e) => {
    setSelectedVegitable(e.target.value);
  };

  useEffect(() => {
    console.log(selectedVegitable, "selectedVegitable");
  }, [selectedVegitable]);

  return (
    <div>
      <select value={selectedVegitable} onChange={handleVegitables}>
        {vegitables.length >= 1 &&
          vegitables.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ChecksAndForms;
