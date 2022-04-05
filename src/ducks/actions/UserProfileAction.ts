import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState, EditUserState } from "../../types";

const setUsers = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/users") as{
        data: EditUserState
      }

      const editUser: EditUserState = {
        id: data.id,
        name: data.name,
        username: data.username,
        email: data.email,
        address: {
          street: data.address.street,
          city: data.address.city,
          zipcode: data.address.zipcode,
        },
        phone: data.phone,
        website: data.website,
      }
      dispatch({
        type: "EDIT-USERS",
        payload: editUser,
      });
    } catch (err: any) {}
  };
};

export { setUsers };
