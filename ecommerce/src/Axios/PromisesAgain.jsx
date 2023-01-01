import axios from "axios";
import React, { useState } from "react";

const PromisesAgain = () => {
  const [datum, setDatum] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  //   const [typiData, setTypiData] = useState({});
  //   const [dataError, setDataError] = useState("");

  const axiosFuck = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => {
        setDatum(response.datum);
        setIsLoading(true);
        axios
          .get("https://dummyjson.com/products/1")
          .then((response) => console.log(response));
      })
      .catch((error) => console.log(error));
  };

  const axiosFunckTwo = () => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((resp) => {
        // return resp;
        console.log("resp", resp);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Oyy..not appearing Anything</h1>
      <div>{isLoading ? <h6>Hold On.... On your work Only Mr</h6> : null}</div>

      <div>
        {datum.id ? (
          <div>
            <h5>{datum.id}</h5> <h6>{datum.discountPercentage}</h6>
          </div>
        ) : null}
      </div>

      <button onClick={axiosFunckTwo}>Click</button>
    </div>
  );
};

export default PromisesAgain;
