import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ExampleChild from "./ExampleChild";

const ExampleProps = () => {
  const dispatch = useDispatch();
  const [enput, setEnput] = useState({
    name: "",
    Email: "",
    city: "",
  });
  const [celect, setCelect] = useState(["Hyd", "Vij", "Gun"]);
  const [celected, setCelected] = useState("");
  const [komponents, setKomponents] = useState([
    {
      key: ".......",
      value: "okay",
    },
  ]);
  const [cet, setCet] = useState("Okay na");

  const changingEnput = (e) => {
    setEnput({ ...enput, [e.target.name]: e.target.value });
    setCelected(e.target.value);
    // console.log(setCelected, "okay");
  };

  const changinKomponent = (e) => {
    e.preventDefault();
    console.log("done", enput);
    dispatch({
      type: "ADMIN_DETAILS",
      payload: {
        name: "admin person",
      },
    });
    // if (enput.name.length >= 4) {
    //   localStorage.setItem("input", JSON.stringify(enput));
    // }
    // if (enput.Email.length >= 8) {
    //   localStorage.setItem("outPut", JSON.stringify(enput));
    // }
  };

  return (
    <div class="alert alert-warning">
      <form onSubmit={changinKomponent}>
        <label className="lead"> Enter Name </label>
        <input
          name="name"
          value={enput.name}
          onChange={changingEnput}
          type="text"
        />
        <br></br>
        <br></br>
        <label className="lead"> Enter your email </label>
        <input
          name="Email"
          value={enput.email}
          type="email"
          onChange={changingEnput}
        />
        <label className="lead">Enter city</label>

        <select onChange={changingEnput} name="city" value={celected}>
          {celect.length >= 1 &&
            celect.map((item, index) => (
              <option key={index} value={item}>
                {" "}
                {item}{" "}
              </option>
            ))}
        </select>

        <div class="alert alert-danger">
          <ExampleChild komponents={komponents} />
        </div>
        <center>
          <button onClick={changinKomponent} type="submit" class="btn btn-info">
            Confirm
          </button>
          <br></br>
        </center>
      </form>
    </div>
  );
};

export default ExampleProps;
