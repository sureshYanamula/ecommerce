import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { adminReducer } from "./adminReducer";
import { AnotherReducer } from "./AnotherReducer";
import { TopUserReducer } from "./TopUserReducer";

const rootReducer = combineReducers({
  user: userReducer,
  admin: adminReducer,
  other: AnotherReducer,
  topUser: TopUserReducer,
});

export default rootReducer;
