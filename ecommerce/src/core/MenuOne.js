import React, { useEffect } from "react";
import { Link, withRouter } from "react-router-dom";

const MenuOne = ({ history }) => {
  useEffect(() => {}, [history.location.pathname]);
  console.log(history, "history");

  const isActive = (history, path) => {
    if (history.location.pathname === path) {
      return { color: "#ff9900" };
    } else {
      return { color: "#ffffff" };
    }
  };

  return (
    <div>
      <ul className="nav bg-primary">
        <li className="nav-item">
          <Link
            className="nav-link active"
            style={isActive(history, "/")}
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/signin")}
            to={"/signin"}
          >
            SignIn
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={isActive(history, "/signup")}
            to={"/signup"}
          >
            SignUp
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default withRouter(MenuOne);
