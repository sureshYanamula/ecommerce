import React, { useState } from "react";

const Example = () => {
  const [name, setName] = useState("");
  const [course, setCourse] = useState([
    {
      label: "Reactjs",
      checked: false,
    },
    {
      label: "Javascript",
      checked: false,
    },
    {
      label: "HTML",
      checked: false,
    },
    {
      label: "CSS",
      checked: false,
    },
  ]);
  const [gender, setGender] = useState(["male", "female"]);
  const [selected, setSelected] = useState("select");
  const [component, setComponent] = useState("");
  const [buttComp, setButtComp] = useState([]);

  const changingName = (e) => {
    setName(e.target.value);
  };

  const handleCourse = (e) => {
    let subject = [...course];
    subject.map((item) => {
      if (item.label === e.target.name) {
        item.checked = e.target.checked;
      }
    });
    setCourse(subject);
  };

  const changeSelect = (e) => {
    setSelected(e.target.value);
  };

  const handleButton = () => {
    console.log(name, course, selected);
  };

  return (
    <div class="p-3 mb-2 bg-success text-white">
      <label> Name of the Candidate</label>
      <br></br>
      <input
        class="lead"
        name="name"
        value={name}
        onChange={changingName}
        type="text"
        // class="form-control"
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <br></br>
      <h3> select the courses you want :</h3>
      <div>
        {course.length >= 1 &&
          course.map((item, index) => (
            <p key={index}>
              <input
                name={item.label}
                type="checkbox"
                onChange={handleCourse}
              />
              <label>{item.label}</label>
            </p>
          ))}
      </div>
      <h4> Gender:</h4>
      <form>
        <select onChange={changeSelect} value={selected}>
          {gender.length >= 1 &&
            gender.map((item, index) => <option key={index}>{item}</option>)}
        </select>
      </form>
      <br></br>
      <center></center>
    </div>
  );
};

export default Example;
