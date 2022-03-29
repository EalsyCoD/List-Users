import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "./types";

import userReducer from "./ducks/reducers/UserReducers";
import filterReducer from "./ducks/reducers/FilterReducer";

const reducer = combineReducers<RootState>({
  users: userReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
