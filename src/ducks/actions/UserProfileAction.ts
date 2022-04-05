import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { RootState, EditUserState, ICard } from '../../types'

const setUsers = (
  name: string
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/users") as{
        data: EditUserState
      }

      const editUser: EditUserState = ({
        ...data,
        items: data.items.map((item: ICard) => ({
          id: item.id,
          name: item.name,
          username: item.username,
          email: item.email,
          address: {
            street: item.address.street,
            city: item.address.city,
            zipcode: item.address.zipcode,
          },
          phone: item.phone,
          website: item.website,
          company: {
            name: item.name
          }
        })) 
      })
      dispatch({
        type: "EDIT-USERS",
        payload: editUser,
      });
    } catch (err: any) {}
  };
};

export { setUsers };
