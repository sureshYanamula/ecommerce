import React from "react";

const ThirdButton = (props) => {
  const clickingSS = () => {
    props.clicking();
  };
  return (
    <div>
      <button type="button" class="btn btn-dark" onClick={clickingSS}>
        ^_^
      </button>
    </div>
  );
};

export default ThirdButton;
