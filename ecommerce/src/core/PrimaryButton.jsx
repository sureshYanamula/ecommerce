import React from "react";

const PrimaryButton = (props) => {
  const handlePrimaryButton = () => {
    props.addNames();
  };

  return (
    <div>
      <button onClick={handlePrimaryButton} className="btn btn-primary">
        {props.buttonLable}
      </button>
    </div>
  );
};

export default PrimaryButton;
