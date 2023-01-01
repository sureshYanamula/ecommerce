import React, { useState } from "react";

const FormOne = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");

  const changeHandle = (e) => {
    setFirst(e.target.value);
  };

  const changing = (e) => {
    setSecond(e.target.value);
  };

  const clickChange = (e) => {
    console.log("Button clicked", first);
  };

  const clicking = (e) => {
    console.log("clickedAgain", second);
  };

  const changingOne = (e) => {
    setThird(e.target.value);
  };
  return (
    <div>
      <center>
        <h3 className="alert alert-warning"> FORMS and INPUTS </h3>
      </center>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name :
          </label>
          <input
            type="text"
            class="form-control"
            value={first}
            onChange={changeHandle}
          />
        </div>
        <center>
          <button
            onClick={clickChange}
            type="button"
            className="btn btn-primary"
          >
            click and see in console
          </button>
        </center>
      </form>

      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={changing}
            value={second}
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            name="Password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            onChange={changingOne}
            value={third}
          />
        </div>
        <button onClick={clicking} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormOne;
