import React from "react";

const CompExamB = (props) => {
  const { descrp } = props;
  const { descrptions } = props;

  return (
    <div>
      {descrp}

      <div>
        {descrptions.length >= 1 &&
          descrptions.map((item, index) => (
            <h5 key={index}>
              {item.name}:{item.post}
            </h5>
          ))}
      </div>
    </div>
  );
};

export default CompExamB;
