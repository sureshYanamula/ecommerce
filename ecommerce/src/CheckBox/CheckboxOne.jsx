import React, { useState } from "react";

const CheckboxOne = () => {
  const [options, setOptions] = useState([
    {
      label: "good",
      checked: false,
    },
    {
      label: "bad",
      checked: false,
    },
    {
      label: "okay",
      checked: false,
    },
  ]);

  const changingChecks = (e) => {
    let duplicate = [...options];
    duplicate.map((item) => {
      if (item.label === e.target.name) {
        item.checked = e.target.checked;
      }
    });
    setOptions(duplicate);
  };

  return (
    <div>
      <form>
        <div class="input-group mb-3">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            name={options.name}
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
            onChange={changingChecks}
          />
        </div>

        {options.length >= 1 &&
          options.map((item) => <label>{item.label}</label>)}
      </form>
    </div>
  );
};

export default CheckboxOne;
