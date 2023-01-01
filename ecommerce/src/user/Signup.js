// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Layout from "../core/Layout";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// const Signup = () => {
//   const dispatch = useDispatch();
//   const [values, setValues] = useState({
//     name: "",
//     email: "",
//     password: "",
//     error: "",
//     success: false,
//   });

//   const { name, email, password, error, success } = values;

//   const handleChange = (e) => {
//     setValues({ ...values, [e.target.name]: e.target.value });
//   };

//   const clickSubmit = (e) => {
//     e.preventDefault();

//     if (name.length < 5) {
//       setValues({ ...values, error: "ur name is an error...gooooooo" });
//       return;
//     }
//     if (password.length < 10) {
//       setValues({ ...values, error: "password WRONG -_-" });
//       return;
//     }

//     axios
//       .post("https://run.mocky.io/v3/153036d2-9616-4b1f-b848-2d0501d0fc8c", {
//         name,
//         email,
//         password,
//       })
//       .then((resp) => {
//         if (resp.data.message === "user created successfully") {
//           setValues({
//             name: "",
//             email: "",
//             password: "",
//             error: "",
//             success: true,
//           });
//         }
//       })
//       .catch((err) => {
//         setValues({
//           ...values,
//           error: true,
//         });
//       });
//   };

//   const changingDataRedux = () => {
//     dispatch({
//       type: "INPUTTING",
//       payload: {
//         name: "Suresh",
//         details: "Sr Software Engr",
//         hiddentalent:
//           "can work in 3 companies at a time with out knowing one another",
//       },
//     });
//   };
// };

// return (
//   <Layout
//     title="Signup"
//     description="Signup to Node React E-commerce App"
//     classOne="container col-md-6 offset-md-2"
//   >
//     {values.success && (
//       <div className="alert alert-info">
//         New account is created. Please <Link to="/signin">Signin</Link>
//       </div>
//     )}

//     {values.error && <div className="alert alert-info">{values.error}</div>}

//     <form onSubmit={clickSubmit}>
//       <div className="form-group">
//         <label className="text-muted">Name</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           type="text"
//           name="name"
//           className="form-control"
//           value={name}
//         />
//       </div>
//       <div className="form-group">
//         <label className="text-muted">Email</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           type="email"
//           name="email"
//           className="form-control"
//           value={email}
//         />
//       </div>
//       <div className="form-group">
//         <label className="text-muted">Password</label>
//         <input
//           onChange={(e) => handleChange(e)}
//           type="password"
//           name="password"
//           className="form-control"
//           value={password}
//         />
//       </div>
//       <button
//         type="button"
//         onClick={changingDataRedux}
//         className="btn btn-primary"
//       >
//         Creat User
//       </button>
//     </form>
//     {JSON.stringify(values)}
//   </Layout>
// );

// export default Signup;
import React from "react";
import { useDispatch } from "react-redux";

const Signup = () => {
  const dispatch = useDispatch();

  const changeRedux = (e) => {
    dispatch({
      type: "OUTPUTTING",
      payload: {
        name: "Suresh",
        details: "Sr Software Engr",
        hiddentalent:
          "can work in 3 companies at a time with out knowing one another",
      },
    });
  };

  return (
    <div>
      <center>
        <button onClick={changeRedux}>Click and check redux</button>
      </center>
    </div>
  );
};

export default Signup;
