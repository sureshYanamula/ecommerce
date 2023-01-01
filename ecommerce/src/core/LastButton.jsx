import React, { useState } from "react";
import SecondarButton from "./SecondarButton";
import ThirdButton from "./ThirdButton";

const LastButton = () => {
  const [get, setGet] = useState([]);
  const [det, setDet] = useState("");
  const [but, setBut] = useState("");
  const [put, setPut] = useState("");

  const hadleon = (e) => {
    setDet(e.target.value);
  };

  const handleCh = (event) => {
    event.preventDefault();
    let set = [...get];
    set.push(det);
    setGet(set);
    setDet("");
  };

  const clickingS = (e) => {
    setPut(e.target.value);
  };

  const clicking = (event) => {
    event.preventDefault();
    let jet = [...but];
    jet.push(put);
    setBut(jet);
    setPut("");
  };

  return (
    <div>
      <form onSubmit={handleCh}>
        <div class="input-group">
          <span class="input-group-text">First and last name</span>
          <input
            value={det}
            onChange={hadleon}
            type="text"
            aria-label="First name"
            class="form-control"
          />
          <input
            onChange={clickingS}
            type="text"
            aria-label="Last name"
            class="form-control"
            value={put}
          />
        </div>
        <button
          //   onClick={() => {
          //     setDet(["Maneesha", "Nani"]);
          //   }}
          onClick={handleCh}
          type="button"
          class="btn btn-outline-warning"
        >
          Submit
        </button>
        <br></br>
        <ThirdButton but={but} clicking={clicking} />
      </form>

      {get.length && get.map((item, index) => <p key={index}>{item}</p>)}
      {/* {det && det} */}
      {but.length && but.map((item, index) => <h5 key={index}>{item}</h5>)}
    </div>
  );
};

export default LastButton;
