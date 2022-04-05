import { EditUserState, EditUserAction } from "../../types";

const initialState: EditUserState = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    city: "",
    zipcode: 0,
  },
  phone: 0,
  website: "",
}

const RepoReducer = (
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

export default RepoReducer;
