import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import SecondarButton from "./SecondarButton";

const SpareButton = () => {
  const [name, setName] = useState("");
  const [change, setChange] = useState("");

  const gameChangerz = (event) => {
    event.preventDefault();
    let kat = [...name];
    kat.push(change);
    setName(kat);
    setChange("");
  };

  const changerz = (e) => {
    setChange(e.target.value);
  };

  return (
    <div>
      <form onSubmit={gameChangerz}>
        <div class="input-group mb-2">
          <div class="input-group-text">
            <input
              class="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
            />
          </div>
          <input
            type="text"
            class="form-control"
            aria-label="Text input with checkbox"
            placeholder="invisible there ...down to sucess"
            value={change}
            onChange={changerz}
          />
        </div>
        <button
          onClick={gameChangerz}
          type="button"
          class="btn btn-outline-success"
        >
          Success
        </button>
        <br></br>

        <SecondarButton name={name} gameChangerz={gameChangerz} />
      </form>

      {name.length >= 1 && name.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default SpareButton;
