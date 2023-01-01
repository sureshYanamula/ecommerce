export const userReducer = (state = null, action) => {
  switch (action.type) {
    case "USER_DETAILS":
      return action.payload;
    case "LOGOUT":
      return action.payload;
    default:
      return state;
  }
};
