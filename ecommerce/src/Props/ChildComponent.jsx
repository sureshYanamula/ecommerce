import React from "react";

function ChildComponent(props) {
  const handleWarning = () => {
    props.handleSubmit();
  };
  return (
    <div>
      <button onClick={handleWarning} type="submit" class="btn btn-warning">
        Suresh
      </button>
    </div>
  );
}

export default ChildComponent;
