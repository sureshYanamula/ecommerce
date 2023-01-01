// import axios from "axios";
// import React, { Component } from "react";

// export class SignTwo extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       AadharDetailz: [
//         {
//           name: "Kat",
//           wife: "MyBug",
//         },
//         {
//           name: "Cat",
//           wife: "Bug",
//         },
//         {
//           name: "Kat",
//           wife: "Bug",
//         },
//       ],

//       componentDidMount() {
//         axios
//           .post("https://jsonplaceholder.typicode.com/todos")
//           .then((resp) => {
//             console.log(resp);
//             this.setState({ typicodeData: resp.data });
//           });
//       },
//     };
//   }
//   render() {
//     const { AadharDetailz } = this.state;
//     return (
//       <div>
//         {AadharDetailz.map((item) => (
//           <p>{`${item.name} ${item.wife}`}</p>
//         ))}
//         <h1> what Kat !!!!! Liked ur name aa ...from "Cat" to "Kat"....^_^ </h1>

//         <div class="input-group mb-3">
//           <div class="input-group-prepend">
//             <div class="input-group-text">
//               <input
//                 type="checkbox"
//                 aria-label="Checkbox for following text input"
//               />
//             </div>
//           </div>
//           <input
//             type="KAT"
//             class="form-control"
//             aria-label="Text input with checkbox"
//           />
//         </div>

//         <div class="input-group">
//           <div class="input-group-prepend">
//             <div class="input-group-text">
//               <input
//                 type="radio"
//                 aria-label="Radio button for following text input"
//               />
//             </div>
//           </div>
//           <input
//             type="text"
//             class="form-control"
//             aria-label="Text input with radio button"
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default SignTwo;

import React from "react";
import { useDispatch } from "react-redux";

function SignTwo() {
  const dispatch = useDispatch();

  const addingReduxData = (e) => {
    dispatch(
      // {
      //   type: "INPUT_DETAILS",
      //   payload: {
      //     name: "Suresh",
      //     wifeName: "Maneesha",
      //     token: "Sucess UFF Done",
      //   },
      // },
      {
        type: "LOGGING",
        payload: {
          name: "Maneesha",
          husband: "Suresh",
          token: "Review It Mr",
          ending: "done",
        },
      }
    );
  };

  return (
    <div>
      <button class="btn btn-info" onClick={addingReduxData}>
        Press
      </button>
    </div>
  );
}

export default SignTwo;
