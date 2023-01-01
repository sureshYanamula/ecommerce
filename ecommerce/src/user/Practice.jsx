import React from "react";
import { useState } from "react";

const Practice = () => {
  const [value, setValue] = useState([]);
  const [valueOne, setValueOne] = useState("");
  const [valueTwo, setValueTwo] = useState(true / false);
  const [valueThree, setValueThree] = useState(null);
  const [valueFour, setValueFour] = useState([
    // {
    //   name: "Suresh",
    //   age: 27,
    //   condition: false,
    // },
    // {
    //   name: "Maneesha",
    //   age: 22,
    //   condition: true,
    // },
  ]);
  return (
    <div
      style={{
        border: "20px blue solid",
        margin: " 20px",
        padding: "20px",
        alignitems: "center",
      }}
    >
      {/* {value.length ? (
        value.map((item, index) => <p key={index}> {item}</p>)
      ) : (
        <p> err </p>
      )} */}
      {value.length ? (
        value.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        <h5 style={{ color: "red" }}> error response</h5>
      )}

      {valueOne ? <p>{valueOne}</p> : <h6> error</h6>}

      {valueTwo ? (
        <p> {valueTwo}</p>
      ) : (
        <p style={{ font: "small-caption" }}> One more error </p>
      )}

      {valueThree ? (
        <p>{valueThree}</p>
      ) : (
        <h5 style={{ color: "yellow" }}>again error</h5>
      )}
      {valueFour.length ? (
        <p>
          {valueFour.map((item, index) => (
            <div key={index} style={{ color: "orange" }}>
              <h3>{item.name}</h3>
              <h4>{item.age}</h4>
              {/* <h4>{item.condition}</h4> */}
            </div>
          ))}
        </p>
      ) : (
        <h6 style={{ color: "orange" }}>error again</h6>
      )}
      <button className="btn btn-success"> sucess</button>
      <button className="btn btn-primary"> suces</button>
      {/* <Message> message</Message> */}
    </div>
  );
};

export default Practice;

// {
//     value.length && value.map((item,index)=><div key={index}>
//         <h1>{item.name}</h1>
//         <p>{item.age}</p>
//     </div>)
// }
