export const TopUserReducer = (state = null, action) => {
  switch (action.type) {
    case "OUTPUTTING":
      return action.payload;
    case "INPUTTING":
      return action.payload;
    default:
      return state;
  }
};
