import React, { useState } from "react";
import CompExamB from "./CompExamB";

const CompExamA = () => {
  const [descrption, setDescrption] = useState(
    "Web developer with 3yrs experience knows more ..than a 7yrs dev"
  );
  const [descrptions, setDescrptions] = useState([
    {
      name: "Suresh",
      post: "Sr software",
    },
    {
      name: "Maneesha",
      post: "Jr software",
    },
    {
      name: "Nani",
      post: "Fresher",
    },
  ]);

  //   const changingState = () => {
  //     setDescrptions("um....correct e na");
  //   };

  return (
    <div className="lead">
      <CompExamB descrption={descrption} descrptions={descrptions} />
      {/* <button onClick={changingState}>UMMM</button> */}
    </div>
  );
};

export default CompExamA;
