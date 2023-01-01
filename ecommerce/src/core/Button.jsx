import React, { useState } from "react";
import OtherButton from "./OtherButton";

const ButtonComponent = () => {
  const [name, setName] = useState([""]);
  const [valueAdd, setValueAdd] = useState("");
  const [nameOne, setNameOne] = useState([""]);
  const [first, setFirst] = useState("");
  const [nameTwo, setNameTwo] = useState([""]);
  const [second, setSecond] = useState([""]);
  const [lable, setLable] = useState([""]);
  const [lableTwo, setLableTwo] = useState([""]);

  const handleChange = (e) => {
    setValueAdd(e.target.value);
  };

  const handleChangeOne = (e) => {
    setFirst(e.target.value);
  };

  const handleAdd = () => {
    let dummyarry = [...name];
    dummyarry.push(valueAdd);
    // setValueAdd(dummyarry);
    // setName(" ");
    setName(dummyarry);
    setValueAdd("");
  };

  const clickSubmit = (event) => {
    event.preventDefault();
    let againDummy = [...nameOne];
    againDummy.push(first);
    setNameOne(againDummy);
    setFirst("");
  };

  const clickSubmitAgain = (event) => {
    event.preventDefault();
    let puri = [...nameTwo];
    puri.push(second);
    setNameTwo(puri);
    setSecond("");
  };

  const handlePuri = (e) => {
    setSecond(e.target.value);
  };

  const clickforChange = () => {
    setLable("Ahaaaaaa !!!");
  };

  const lableChange = () => {
    let pudi = [...lable];
    pudi.push(setLable);
    setLableTwo(pudi);
    setLable("");
  };

  return (
    <div>
      <form onSubmit={clickSubmit}>
        <label for="basic-url" className="form-label">
          Your Good name please along with initial ...like SIMHADRI
        </label>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            id="basic-url"
            value={valueAdd}
            onChange={handleChange}
            aria-describedby="basic-addon3"
          />
        </div>

        <button onClick={handleAdd} type="button" className="btn btn-info">
          ClickTo ADD
        </button>

        <br></br>
        <br></br>

        <div class="input-group mb-2">
          <label>enter anything but use enter button</label>
          <input
            type="text"
            value={first}
            class="form-control"
            placeholder=" User Details like..CEO"
            aria-label="Username"
            onChange={handleChangeOne}
          />
          {/* <span class="input-group-text">@</span>
          <input
            type="text"
            class="form-control"
            placeholder="Server"
            aria-label="Server"
          /> */}
        </div>
        <button onClick={clickSubmit} type="submit" className="btn btn-danger">
          Enter button
        </button>

        <br></br>
        <input
          class="form-control"
          type="text"
          placeholder="Readonly input here..."
          readonly
          value={second}
          onChange={handlePuri}
        />
        <br></br>
        <button
          onClick={clickSubmitAgain}
          type="submit"
          className="btn btn-danger"
        >
          Once more
        </button>

        <br></br>
        <button onClick={lableChange}> {lable}</button>
        <button
          onClick={clickforChange}
          type="submit"
          className="btn btn-danger"
        >
          Enter button !!!
        </button>

        <OtherButton clickforChange={clickforChange} lable={lable} />
      </form>

      {/* <button onClick={handleAdd}>suresh</button> */}

      {/* {name.length >= 1 &&
        name.map((item, index) => <h5 key={index}>{item}</h5>)} */}

      {/* {name.length && name.map((item) => <h1>{item}</h1>)}
       */}
      {name.length >= 1 &&
        name.map((item, index) => <h2 key={index}>{item}</h2>)}

      {nameOne.length >= 1 &&
        nameOne.map((item, index) => <h6 key={index}>{item}</h6>)}

      {nameTwo.length >= 1 &&
        nameTwo.map((item, index) => <h5 key={index}>{item}</h5>)}
    </div>
  );
};

export default ButtonComponent;
