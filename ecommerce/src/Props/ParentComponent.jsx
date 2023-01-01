import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [inputValue, setInputValue] = useState("");
  const [value, setValue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = [...value];
    data.push(inputValue);
    setValue(data);
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
        <br></br>
        {/* <button type="submit" onClick={handleSubmit}>
          Submit
        </button> */}
        <ChildComponent handleSubmit={handleSubmit} />
      </form>
      {value.length >= 1 &&
        value.map((item, index) => <h1 key={index}>{item}</h1>)}
    </div>
  );
}

export default ParentComponent;
