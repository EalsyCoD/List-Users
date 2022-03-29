import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../types";
import { FilterInitialState, FilterAction, DispatchFilter } from "../../types";

const initialState: FilterInitialState = {
  filter: [],
};

const filterReducerCompany = (
  state: FilterInitialState = initialState,
  action: FilterAction
): FilterInitialState => {
  switch (action.type) {
    case "SET-FILTER":
      return {
        ...state,
        filter: state.filter.sort((a: any, b: any) =>
          a.company.name > b.company.name ? 1 : -1
        ),
      };
    default:
      return state;
  }
};

export const filterNameChangeCompany = (
  filter: any
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch: DispatchFilter) => {
    dispatch({
      type: "SET-FILTER",
      payload: filter,
    });
  };
};

export default filterReducerCompany;
