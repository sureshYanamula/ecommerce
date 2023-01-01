import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Admin = () => {
  const dispatch = useDispatch();

  const [adminInput, setAdminInput] = useState({});
  const [admin, setAdmin] = useState({});
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("input"));
    if (data) {
      setAdminInput(data);
    }
    let condition = JSON.parse(localStorage.getItem("outPut"));
    if (condition) {
      setAdmin(condition);
    }
  }, []);

  const handleDispatchFunction = () => {
    dispatch({
      type: "USER_DETAILS",
      payload: {
        name: "suresh",
        email: "ysureshy.1994@gmail.com",
        token:
          "wjkngowejrbnnoewjrbnoiuwenfokwdnvgowijgoiwiengojewmvuwueehfoiwmg",
        role: "Lead Software Developer",
      },
    });
  };

  return (
    <div>
      <p>YO !!!!!!!!!!!!!! I'm admin Page @-@</p>
      {adminInput.name && (
        <>
          <h1>{adminInput.name}</h1>
          <h2>{adminInput.Email}</h2>
          <h3>{adminInput.city}</h3>
        </>
      )}

      {admin.name && (
        <>
          <h5>{admin.name}</h5>
          <h5>{admin.Email}</h5>
          <h5>{admin.city}</h5>
        </>
      )}
      <div class="text-center">
        <img
          src="C:\Users\Maneesha\Pictures\Screenshots\Screenshot (16).jpeg "
          class="rounded"
          alt="umm please me with this kat"
        />
      </div>
      <span class="material-icons">check_circle</span>

      <button onClick={handleDispatchFunction}>Dispatch Redux button</button>
    </div>
  );
};

export default Admin;
