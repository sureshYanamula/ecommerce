import React, { useState } from "react";

const EventloopOne = () => {
  const [first, setfirst] = useState("start");

  function something() {
    setfirst("Done First ");
  }
  something();

  return <div>{first}</div>;
};

export default EventloopOne;
