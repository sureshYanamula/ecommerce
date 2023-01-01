// export const AnotherReducer = (state = null, action) => {
//   switch (action.type) {
//     case "INPUT_DETAILS":
//       return action.payload;
//     case "LOGGING":
//       return action.payload;
//     default:
//       return state;
//   }
// }
// export const AnotherReducer = (state = null, action) => {
//   switch (action.type) {
//     case "INPUT_DETAILS":
//       return action.payload;

//     case "LOGGING":
//       return action.payload;

//     default:
//       return state;
//   }
// };

export const AnotherReducer = (state = null, action) => {
  switch (action.type) {
    case "INPUT_DETAILS":
      return action.payload;
    case "LOGGING":
      return action.payload;
    case "JOGGING":
      return action.payload;
    default:
      return state;
  }
};
