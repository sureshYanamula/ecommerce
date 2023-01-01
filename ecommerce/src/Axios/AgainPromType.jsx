import React from "react";

const AgainPromType = () => {
  function myDispencer(some) {
    console.log(some);
  }

  // Call Back //....this is

  function myCal(sumOne, sumTwo, sumThree, sumFour, mycallbak) {
    let sum = sumOne + mycallbak;
    mycallbak(sum);
  }
  myCal(1, 2, 3, 4, myDispencer);

  return (
    <div>
      <h4>Call Back</h4>
    </div>
  );
};

export default AgainPromType;
