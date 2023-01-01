import React, { useState, useEffect } from "react";

const SelectOne = () => {
  const [fruits, setFruits] = useState([
    "Guva",
    "CustardApple",
    "DragonFruit",
    "Apple",
    "WaterMelon",
    "Mango",
  ]);
  const [selectedFruits, setSelectedFruits] = useState("Guva");

  const changingFruits = (e) => {
    setSelectedFruits(e.target.value);
  };

  useEffect(() => {
    console.log("i like", selectedFruits);
  }, [selectedFruits]);

  return (
    <div className="alert alert-success">
      <i class="cid-universal-access"> Select ur fruit</i>

      <form>
        <select onChange={changingFruits} value={selectedFruits}>
          {fruits.length >= 1 &&
            fruits.map((item) => (
              <option value={item} key={item}>
                {item}{" "}
              </option>
            ))}
        </select>
      </form>
    </div>
  );
};

export default SelectOne;
