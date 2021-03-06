import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';

import { RootState } from '../../types';

const setUser = (
  _id: number,
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    try {
      const res = await axios.get('/users');
      dispatch({
        type: 'SET-USERS',
        payload: res.data,
      });
    } catch (err) {}
  };
};

export { setUser };
