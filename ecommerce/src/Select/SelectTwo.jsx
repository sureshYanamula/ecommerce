import React, { useEffect } from "react";
import { useState } from "react";

const SelectTwo = () => {
  const [curries, setCurries] = useState([
    "PappuCharu",
    "PotatoFry",
    "Chicken",
    "PaneerButterMasala",
    "PalakPaneer",
  ]);

  const [selectedCurry, setSelectedCurry] = useState("PaneerButterMasala");

  const changingCurry = (e) => {
    setSelectedCurry(e.target.value);
  };

  useEffect(() => {
    console.log("i like", selectedCurry);
  }, [selectedCurry]);

  return (
    <div>
      <form>
        <select value={selectedCurry} onChange={changingCurry}>
          {curries.length >= 1 &&
            curries.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
        </select>
      </form>
    </div>
  );
};

export default SelectTwo;
