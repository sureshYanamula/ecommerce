import React from "react";

const CompA = (props) => {
  const { worlds } = props;
  return (
    <div>
      <h6>{worlds}(......in CompA)</h6>
    </div>
  );
};

export default CompA;
