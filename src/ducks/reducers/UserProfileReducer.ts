import { EditUserState, EditUserAction } from "../../types";

const initialState: EditUserState = {
  items: [],
};

const edituserReducer = (
  state: EditUserState = initialState,
  action: EditUserAction
): EditUserState => {
  switch (action.type) {
    case "EDIT-USERS":
      return action.payload;

    default:
      return state;
  }
};

export default edituserReducer;
