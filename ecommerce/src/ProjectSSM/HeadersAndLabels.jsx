import React, { useState } from "react";

const HeadersAndLabels = () => {
  const [details, setDetails] = useState({
    name: "",
    age: "",
    location: "",
  });

  const changingDetails = (e) => {
    setDetails(e.target.value);
  };

  return (
    <div>
      <center>
        <h5 class="text-warning bg-dark">
          <h1>SIMHADRI</h1> SUPER MART
        </h5>
      </center>
      <h6 class="d-flex justify-content-end">
        Mandadam , main center , door:6-80
      </h6>
      <center style={{ border: "green 5px solid" }}>
        <h4>Lable</h4>
      </center>
      <br></br>
      <br></br>

      <form>
        <div className="d-flex justify-content-between">
          <div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Name
              </span>
              <input
                value={details.name}
                onChange={changingDetails}
                type="text"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                class="form-select"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text" id="inputGroup-sizing-default">
                Age
              </span>
              <input
                value={details.age}
                onChange={changingDetails}
                type="number"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
              />
            </div>
            <div class="input-group mb-1">
              <label class="input-group-text" for="inputGroupSelect01">
                Location
              </label>
              <select
                class="form-select"
                id="inputGroupSelect01"
                value={details.location}
              >
                <option selected>Mandadam...</option>
                <option value="1">Thullur</option>
                <option value="2">Malkapuram</option>
                <option value="3">Velagapudi</option>
                <option value="4">VenkataPalem</option>
                <option value="5">Vijayawada</option>
                <option value="6">Guntur(oblPalem)</option>
              </select>
            </div>
          </div>
          <div
            class="text-primary text-opacity-25"
            style={{ width: "30%", border: "yellowGreen 15px dashed" }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
            molestiae dignissimos, nam consequatur, aut facere distinctio
            expedita aspernatur inventore veritatis deleniti ipsam! Nam
            doloribus nulla accusantium eius excepturi accusamus esse. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Placeat sunt
            nisi pariatur iste? Distinctio inventore est sit neque dolor
            dignissimos.
          </div>
        </div>
      </form>
      <br></br>
      <br></br>
      <p className="lead">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae possimus
        incidunt deleniti saepe quos, maiores delectus in autem ex Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus numquam, voluptatem
        obcaecati libero voluptas necessitatibus magnam ipsam odio impedit aut.
      </p>
    </div>
  );
};

export default HeadersAndLabels;
