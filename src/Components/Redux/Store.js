import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import projectReducers from "./Reducers/ProjectReducers";

export const store = createStore(projectReducers, composeWithDevTools());
