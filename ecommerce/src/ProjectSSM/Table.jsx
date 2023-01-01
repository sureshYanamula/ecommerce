import React, { useState } from "react";

const Table = () => {
  const [isTableVisable, setIsTableVisable] = useState(false);
  const [buttonChange, setButtonChange] = useState("START");

  const changingFunction = () => {
    setIsTableVisable(true);
    setButtonChange("HOPE U GET SATISFIY");
    // setIsTableVisable((prev) => !prev);
  };

  return (
    <div class="p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      {/* <i class="fa-solid fa-house"> home</i>
      <i class="fa-solid fa-user"> done</i> */}
      <h5> For Checking Our Special </h5>

      <button type="button" class="btn btn-success" onClick={changingFunction}>
        {buttonChange}
      </button>
      <div>
        {isTableVisable && (
          <table class="table table-success table-striped">
            <th>heading1</th>
            <th>heading3</th>
            <th>heading2</th>
            <tr>one</tr>
            <tr>onee</tr>
          </table>
        )}
      </div>
    </div>
  );
};

export default Table;
