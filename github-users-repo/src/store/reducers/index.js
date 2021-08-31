import { combineReducers } from "redux";
import usersReducer from "./UsersReducer";
import reposReducer from "./reposReducer";

export default combineReducers({
  user: usersReducer,
  repos: reposReducer,
});
