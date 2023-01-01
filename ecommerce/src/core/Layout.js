import React from "react";

const Layout = ({
  title = "Suresh",
  description = "Maneesha's husband",
  classOne,
  children,
}) => {
  return (
    <div>
      <div className="jumbotron">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <div className={classOne}>{children}</div>
    </div>
  );
};

export default Layout;
