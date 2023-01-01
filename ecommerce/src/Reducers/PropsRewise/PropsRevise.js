import React from "react";
import { useState } from "react";
import ChildProps from "./ChildProps";
import ChildPropType from "./ChildPropType";
import ChildPropTypeTwo from "./ChildPropTypeTwo";
import ReUsableOne from "./ReUsableOne";
import ReUsableThree from "./ReUsableThree";
import ReUsableTwo from "./ReUsableTwo";

function PropsRevise() {
  const [name, setName] = useState("suresh");
  const [isDetails, setIsDetails] = useState(true);
  const [data, setData] = useState([
    { name: "suresh", age: "21" },
    { name: "suresh1", age: "22" },
    { name: "suresh3", age: "23" },
  ]);
  const [details, setDetails] = useState([
    { course: "javascript", position: "senior software engineer" },
    { course: "javascript1", position: "senior software engineer1" },
    { course: "javascript2", position: "senior software engineer2" },
  ]);

  const handleCourse = () => {
    setIsDetails((prev) => !prev);
  };
  return (
    <div>
      <h1>{name}</h1>
      {details.length && isDetails
        ? details.map((item) => (
            <div>
              <h2>{item.course}</h2>
              <h3>{item.position}</h3>
            </div>
          ))
        : null}
      <ChildProps name={name} dataOne={data} />
      <ChildPropType name={name} dataOne={data} handleCourse={handleCourse} />
      <ChildPropTypeTwo name={name} dataOne={data} />
      <ReUsableOne componentName="ReUsableOne" />
      <ReUsableTwo componentName="ReUsableTwo" />
      <ReUsableThree componentName="ReUsableThree" />
    </div>
  );
}

export default PropsRevise;
