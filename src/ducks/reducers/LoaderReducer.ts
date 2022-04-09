import { LoaderState, LoaderAction } from '../../types';

const initialState: LoaderState = {
  status: false,
};

const loaderReducer = (
  state: LoaderState = initialState,
  action: LoaderAction,
): LoaderState => {
  switch (action.type) {
    case 'NEW-LOADER':
      return {
        status: action.payload.status,
      };
    case 'DELETE-LOADER':
      return {
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default loaderReducer;
