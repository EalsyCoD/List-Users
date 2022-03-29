import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState } from "../../types";

const setUser = (
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/users");
      dispatch({
        type: "SET-USERS",
        payload: res.data,
      });
    } catch (err: any) {}
  };
};

export { setUser };
