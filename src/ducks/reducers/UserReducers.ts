import { UserInitialState, UserAction } from "../../types";

const initialState: UserInitialState = [
  {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: 0,
      geo: {
        lat: 0,
        lng: 0,
      },
    },
    phone: 0,
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  },
];
const userReducer = (
  state: UserInitialState = initialState,
  action: UserAction
): UserInitialState => {
  switch (action.type) {
    case "SET-USERS":
      return action.payload;
    default:
      return state;
  }
};
export default userReducer;
