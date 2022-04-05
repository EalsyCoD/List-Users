import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { RootState } from "./types";

import userReducer from "./ducks/reducers/UserReducers";
import filterReducer from "./ducks/reducers/FilterReducer";
import edituserReducer from "./ducks/reducers/UserProfileReducer";
import editReducer from "./ducks/reducers/EditReducer";
import loaderReducer from "./ducks/reducers/LoaderReducer"

const reducer = combineReducers<RootState>({
  users: userReducer,
  filter: filterReducer,
  edituser: edituserReducer,
  edit: editReducer,
  loader: loaderReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
