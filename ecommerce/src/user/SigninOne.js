import axios from "axios";
import React, { Component } from "react";

export class SigninOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      names: [
        "suresh",
        "manisha",
        "nani",
        "chanti",
        "banti",
        "chinni",
        "twochanti",
        "twobanti",
        "twochinni",
      ],
      employees: [
        { name: "suresh", role: "CEO" },
        { name: "manisha", role: "user" },
        { name: "nani", role: "employee" },
      ],
      // typiCodeData: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((resp) => {
        this.setState({ typiCodeData: resp.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  clickSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (name) => (event) => {
    this.setState({
      ...this.state,
      [name]: event.target.value,
    });
  };

  render() {
    const { email, password, names, employees, typiCodeData } = this.state;
    return (
      <div style={{ backgroundColor: "yellow" }}>
        {names.map((item) => (
          <p>{item}</p>
        ))}
        {employees.map((item) => (
          <h1>{`${item.name} ${item.role}`}</h1>
        ))}
        {/* {typiCodeData.length > 0 &&
          typiCodeData.map((item) => <h1>{`${item.userId} ${item.title}`}</h1>)} */}
        <form>
          <div className="form-group">
            <label className="text-muted">Email</label>
            <input
              onChange={this.handleChange("email")}
              type="email"
              className="form-control"
              placeholder="maneeshaSuresh656@gmail.com"
              value={email}
            />
          </div>

          <div className="form-group">
            <label className="text-muted">Password</label>
            <input
              onChange={this.handleChange("password")}
              type="password"
              placeholder="type maneesha09@"
              className="form-control"
              value={password}
            />
          </div>
          <button onClick={this.clickSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SigninOne;
