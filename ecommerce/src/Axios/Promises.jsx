import React, { useState } from "react";

const Promises = () => {
  const [data, setData] = useState("Miraculous");

  const promiseFunck = () => {
    return new Promise((resolve, reject) => {
      let kat = "MyBug";
      if (kat === "MyBug") {
        resolve("Maneesha");
      } else {
        reject("Suresh");
      }
    });
  };

  promiseFunck()
    .then((resp) => {
      setData(resp);
      console.log(resp);
    })
    .catch((resp) => {
      setData("error");
      console.log(resp);
    });

  return (
    <div>
      {data}
      {/* <button className="btn btn-success" onClick={promiseFunck}>
        Click
      </button> */}
    </div>
  );
};

export default Promises;
