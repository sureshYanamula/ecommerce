import React from "react";

const Layout = ({
  title = "Suresh",
  description = "Manisha's husband",
  classOne,
  children,
}) => {
  return (
    <div className="jumbotron">
      <div>
        <h1>{title}</h1>
        <p className="lead">{description}</p>
      </div>
      <div className={classOne}>{children}</div>
    </div>
  );
};

export default Layout;
