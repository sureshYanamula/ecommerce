import React, { useState } from "react";

const FormTwo = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const changingEvent = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };
  const clickChange = (e) => {
    e.preventDefault();
    console.log("changing details--->", details);
  };
  return (
    <div>
      <center className="alert alert-warning">
        <h3> FORMS IN OBJECTS 2</h3>
      </center>

      <div>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              name="email"
              value={details.email}
              onChange={changingEvent}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text"></div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              name="password"
              value={details.password}
              onChange={changingEvent}
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button onClick={clickChange} type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormTwo;
