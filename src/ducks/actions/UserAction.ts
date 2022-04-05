import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import { setLoader, deleteLoader } from "./LoaderAction";

import { RootState } from "../../types";

const setUser = (
  id: number
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoader());
      const res = await axios.get("/users");
      dispatch({
        type: "SET-USERS",
        payload: res.data,
      });
      dispatch(deleteLoader());
    } catch (err: any) {
      dispatch(deleteLoader());
    }
  };
};

export { setUser };
