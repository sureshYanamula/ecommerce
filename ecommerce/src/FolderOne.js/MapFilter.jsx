import React, { useState } from "react";
import ThirdButton from "../core/ThirdButton";

const MapFilter = () => {
  const [details, setDetails] = useState([
    {
      name: "Suresh",
      Age: "26",
    },
    {
      name: "Nani",
      Age: "19",
    },
  ]);

  //   Filter

  const [values, setValues] = useState([30, 50, 60, 90, 100]);

  //   Return Importance

  const changingFun = (value) => {
    if (value === "Suresh") {
      console.log("SURESH");
      return "Yanumula Suresh";
    }

    {
      values.filter((item) => <p>{item < 50}</p>);
    }
  };

  return (
    <div>
      {details.map((item) => (
        <p>
          {item.name} {item.Age}
        </p>
      ))}

      <div>
        {values.map((item) => (
          <p>{item}</p>
        ))}
      </div>

      <button type="button" class="btn btn-dark" onClick={changingFun}>
        Press OverHere
      </button>
    </div>
  );
};

export default MapFilter;
