import React, { useState } from "react";
import LastButton from "./LastButton";
import PrimaryButton from "./PrimaryButton";
import SecondarButton from "./SecondarButton";

const Table = () => {
  const [names, setNames] = useState([]);
  const [enteredName, setEnteredName] = useState("");
  //   const [values, setValues] = useState([]);
  const [buttonLable, setButtonLable] = useState("Submit Button");

  const handleChange = (e) => {
    setEnteredName(e.target.value);
  };
  //   handleChange()

  const addNames = () => {
    let nam = [...names];
    nam.push(enteredName);
    setNames(nam);
    setEnteredName("");
  };
  //   addNames()

  const handleButtonLable = () => {
    setButtonLable("Suresh");
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange}
            type="email"
            className="form-control"
            placeholder="maneeshaSuresh656@gmail.com"
            value={enteredName}
          />
        </div>
      </form>
      <button onClick={handleButtonLable}>Change button lable</button>
      <button onClick={addNames}>{buttonLable}</button>
      <PrimaryButton buttonLable={buttonLable} addNames={addNames} />
      {names.length >= 1 &&
        names.map((item, index) => <h1 key={index}>{item}</h1>)}
      {/* {values.length >= 1 &&
        values.map((item, index) => <h5 key={index}> {index}</h5>)} */}

      <SecondarButton addNames={addNames} />
    </div>
  );
};

export default Table;
