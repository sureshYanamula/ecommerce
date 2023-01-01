import React, { useState } from "react";
import Table from "./Table";

const RadioAndCheckbox = () => {
  const [confirm, setConfirm] = useState([
    {
      label: "Yes",
      checked: false,
    },
    {
      label: "No",
      checked: false,
    },
  ]);

  const [buttonLabel, setButtonLabel] = useState("confirm");

  const [options, setOptions] = useState([
    {
      label: "Any Doubt about PRODUCTS QUALITY",
      checked: false,
    },
    {
      label: "Bad service",
      checked: false,
    },
    {
      label: "Bad OWNER like NANI",
      checked: false,
    },
    {
      label: "Any OTHERS",
      checked: false,
    },
  ]);

  const changingButton = () => {
    setButtonLabel("Conformed");
    alert("thank you ^_^");
  };

  const changingChecks = (e) => {
    let values = [...options];
    values.map((item) => {
      if (item.label === e.target.value) {
        item.checked = e.target.checked;
      }
    });
    setOptions(values);
  };

  const changingRadioButt = (e) => {
    let result = [...confirm];
    result.map((item) => {
      if (item.label === e.target.value) {
        item.checked = e.target.checked;
      }
    });
    setConfirm(result);
  };

  const functionOpen = () => {
    setOptions((prev) => !prev);
  };

  return (
    <div>
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>!</strong> You should check in on some of those fields below.
      </div>
      <div>
        <h3> * Are you a :</h3>
      </div>
      {confirm.map((item) => (
        <div>
          <div class="form-check form-check-inline">
            <input
              name={item.label}
              class="form-check-input"
              type="radio"
              id="inlineRadio1"
            />
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input"
              type="radio"
              name={item.label}
              id="inlineRadio2"
            />
          </div>
        </div>
      ))}
      {/* <div>
        {confirm.length >= 1 &&
          confirm.map((item, index) => <h6 key={index}>{item.label}</h6>)}
      </div> */}

      <button type="button" class="btn btn-warning" onClick={changingButton}>
        {buttonLabel}
      </button>
      <br></br>
      <br></br>
      <Table />
      <br></br>
      <br></br>

      <button type="button" class="btn btn-warning" onClick={functionOpen}>
        FEEDBACK
      </button>

      <form class="mt-auto p-2">
        {options.length >= 1 &&
          options.map((item) => (
            <div class="input-group mb-3">
              <div class="input-group-text">
                <input
                  value={options.label}
                  class="form-check-input mt-0"
                  type="checkbox"
                  aria-label="Checkbox for following text input"
                />
              </div>
              <input
                value={item.label}
                class="form-control"
                aria-label="Text input with checkbox"
                onChange={changingChecks}
              />
            </div>
          ))}

        <br></br>
      </form>
    </div>
  );
};

export default RadioAndCheckbox;
