/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState } from "../../types";

const EditUser = (
  username: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  console.log(username.id);
  return async (dispatch) => {
    try {
      const res = await axios.put(`/users/${username.id}`, username);
      dispatch({
        type: "EDIT-USER",
        payload: username,
      });
    } catch (err: any) {}
  };
};

export { EditUser };
