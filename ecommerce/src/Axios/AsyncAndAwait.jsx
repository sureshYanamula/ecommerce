import axios from "axios";
import React from "react";

const AsyncAndAwait = () => {
  //   const asyncAndAwaitFunk = async () => {
  //     let apiOne = await axios.get("https://dummyjson.com/products/1");
  //     let apiTwo = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos/1"
  //     );
  //     Promise.all([apiOne, apiTwo]).then((responses) => {
  //       console.log(responses, "DoneDanaDonee"n        7\j-);
  //     });
  //   };+

  const asyncAndAwaitFunk = async () => {
    let Kat = await axios.get("https://SimhadriSuperMarket.com");
    let Bug = await axios.get("www.KatTechSolutions.com");

    Promise.all([Kat, Bug]).then((resps) =>
      console.log(resps, "See upi names Kat ^_^")
    );
  };

  return (
    <div>
      <button onClick={asyncAndAwaitFunk}>Press Here</button>
    </div>
  );
};

export default AsyncAndAwait;
