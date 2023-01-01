import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { signinReq } from "../Functions/Signin";

const Signin = () => {
  let history = useHistory();

  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    redirectToReferrer: false,
  });

  //destructring//
  const { email, password, loading, error, redirectToReferrer } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const clickSubmit = (event) => {
    // signinReq("suresh","manisha","nani")
    event.preventDefault();
    signinReq("https://run.mocky.io/v3/42dff4aa-a708-435e-bf7b-2b7647dea2b4", {
      email,
      password,
    }).then((resp) => {
      localStorage.setItem("userData", JSON.stringify(resp.data));
      if (resp.data.role === "admin") {
        history.push("/admin");
      } else {
        history.push("/");
      }
    });

    setValues({ ...values, error: false });
  };

  return (
    <div>
      <form>
        <div className="form-group">
          <label className="text-muted">Email</label>
          <input
            onChange={handleChange("email")}
            type="email"
            className="form-control"
            placeholder="maneeshaSuresh656@gmail.com"
            value={email}
          />
        </div>

        <div className="form-group">
          <label className="text-muted">Password</label>
          <input
            onChange={handleChange("password")}
            type="password"
            placeholder="type maneesha09@"
            className="form-control"
            value={password}
          />
        </div>
        <button onClick={clickSubmit} className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
