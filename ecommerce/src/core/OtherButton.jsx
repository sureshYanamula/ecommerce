import React from "react";

const OtherButton = (props) => {
  const handleLableChange = () => {
    props.clickforChange();
  };

  return (
    <div>
      <button
        onClick={handleLableChange}
        type="button"
        className="btn btn-primary"
      >
        Click to change
      </button>
    </div>
  );
};

export default OtherButton;
