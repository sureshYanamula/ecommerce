import React from "react";

const ChildFour = (props) => {
  const clickingChanging = () => {
    props.clickingSub();
  };

  return (
    <div>
      <button onClick={clickingChanging} type="submit" class="btn btn-error">
        ENTER
      </button>
    </div>
  );
};

export default ChildFour;
