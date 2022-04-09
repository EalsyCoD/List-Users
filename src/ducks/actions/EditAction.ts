import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState, EditUserState, ICard } from '../../types';

const EditUser = (
  item: any,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const { data } = (await axios.put(`/users/${item.id}`, item)) as {data: EditUserState};

      const editUserProfile: EditUserState = {
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
            name: item.company.name,
          },
        })),
      };
      dispatch({
        type: 'EDIT-USER',
        payload: editUserProfile,
      });
    } catch (err) {}
  };
};

export { EditUser };
