import React from "react";

const SecondarButton = (props) => {
  //   const handlePrimaryButton = () => {
  //     props.addNames();
  //   };
  const handleBoochi = () => {
    props.gameChangerz();
  };

  const clanwar = () => {
    props.gameChangerz();
  };

  return (
    <div>
      {/* <button onClick={handlePrimaryButton} type="button" class="btn btn-info">
        Secondary click+
      </button> */}
      <button
        type="button"
        onClick={handleBoochi}
        class="btn btn-outline-light"
      >
        boochiii
      </button>
      <br></br> <br></br>
      <button onClick={clanwar} type="button" class="btn btn-primary btn-lg">
        Large button
      </button>
    </div>
  );
};

export default SecondarButton;
