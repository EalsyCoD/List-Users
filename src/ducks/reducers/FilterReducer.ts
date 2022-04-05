import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../types";
import { FilterInitialState, FilterAction, DispatchFilter } from "../../types";
import { setLoader, deleteLoader } from "../actions/LoaderAction";
const initialState: FilterInitialState = {
  filter: [],
};

const filterReducer = (
  state: FilterInitialState = initialState,
  action: FilterAction
): FilterInitialState => {
  switch (action.type) {
    case "SET-FILTER":
      return {
        ...state,
        filter: state.filter.sort((a: any, b: any) =>
          a.address.city > b.address.city ? 1 : -1
        ),
      };
    default:
      return state;
  }
};

export const filterNameChange = (
  filter: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilter) => {
    dispatch({
      type: "SET-FILTER",
      payload: filter,
    });
  };
};

export default filterReducer;
