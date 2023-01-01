import React from "react";
import { useState } from "react";
import ChildFour from "./ChildFour";

const ParentFour = () => {
  const [data, setData] = useState("");
  const [deta, setDeta] = useState([]);

  const clickingSub = (e) => {
    e.preventDefault();
    let dumma = [...deta];
    dumma.push(data);
    setDeta(dumma);
    setData("");
  };

  return (
    <div>
      <form onSubmit={clickingSub}>
        <input
          value={data}
          onChange={(e) => setData(e.target.value)}
          type="text"
          class="alert alert-success"
        />
        <ChildFour clickingSub={clickingSub} /> xw5467+
      </form>
      {deta.length >= 1 &&
        deta.map((item, index) => <h4 key={index}>{item}</h4>)}
    </div>
  );
};

export default ParentFour;
