/* eslint-disable @typescript-eslint/no-unused-vars */
import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState } from "../../types";

const EditUser = (
    name: any,
  ): ThunkAction<void, RootState, unknown, AnyAction> => {
    console.log(name.id)
    return async (dispatch) => {
      try {
        const res = await axios.put(`/users/${name.id}`, name);
        dispatch({
          type: "EDIT-USER",
          payload: name,
        });
      } catch (err: any) {}
    };
  };
  
export { EditUser };


