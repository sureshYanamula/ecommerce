import { ReactReduxContext } from "react-redux";

export const adminReducer = (state = null, action) => {
  switch (action.type) {
    case "ADMIN_DETAILS":
      return action.payload;
    case "ADMIN_LOGIN":
      return action.payload;
    default:
      return state;
  }
};

// export const adminReducer = (state = null, action) => {
//   switch (action.type) {
//     case "AAAAAAAAAAA_SSSSSSSSS":
//       return action.payload;
//     case "DDDDDDDDDD_FFFFFFFFF":
//       return action.payload;
//     default:
//       return state;
//   }
// };
