import React, { useState } from "react";
import { useEffect } from "react";

const Assainments = () => {
  const [details, setDetails] = useState([
    {
      name: "Suresh",
      age: 10,
      role: "noob software Engineer",
      yearsOfExperience: 7,
    },
    {
      name: "Nani",
      age: 9,
      role: "ultra noob software engnr",
      yearsOfExperience: 1,
    },
    {
      name: "Maneesha",
      age: 20,
      role: "CEO",
      yearsOfExperience: 3,
    },
    {
      name: "VP",
      age: 16,
      role: " super Sr software engnr",
      yearsOfExperience: 10,
    },
    {
      name: "AnyOther",
      age: 100,
      role: "software engnr",
      yearsOfExperience: 12,
    },
  ]);
  const [isHide, setIsHide] = useState(true);
  const [isOK, setIsOK] = useState(true);
  // const [time, setTime] = useState("");

  const hideFunction = () => {
    setIsHide((prev) => !prev);
    let filterExp = [...details];
    filterExp.filter((item) => <p>{item.yearsOfExperience > 5}</p>);
    setDetails(filterExp);
  };

  const handleNameChange = () => {
    setIsOK((pre) => !pre);
  };

  //   useEffect(() => {
  //     let time = myTimeout;
  //     const myTimeout = setTimeout(myGreeting, 5000);
  //     function myGreeting() {
  //       " ";
  //     }
  //     {
  //       document.getElementById("demo").innerHTML = "Happy Birthday!";
  //     }
  //   })[6000];

  return (
    <div class="alert alert-warning">
      {isHide && (
        <div>
          {details.map((item) => (
            <div>
              <h6> :||Employee Name {item.name}</h6>
              <p>|||Age ... {item.age}</p>
              <p className="lead"> |:|Role in company is {item.role}</p>
              <p> |::|Employee Experience{item.yearsOfExperience}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={hideFunction}>clickANDclick</button>
      <div>
        {isOK ? (
          <h5 style={{ color: "ButtonText" }}>Suresh</h5>
        ) : (
          <h5 style={{ color: "Highlight" }}>Nani</h5>
        )}
      </div>
      <button onClick={handleNameChange}>clickCLICK</button>
    </div>
  );
};

export default Assainments;
