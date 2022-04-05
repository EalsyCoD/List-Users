import { EditState, EditAction } from "../../types";

const initialState: EditState = {
    users: [],
}


const EditReducer = (
  state: EditState = initialState,
  action: EditAction
): EditState => {
  switch (action.type) {
    case "EDIT-USER":
      console.log(action.payload)
      return {
          users: state.users.map((user:any) => 
          user.id === action.payload.id ? {...action.payload} : user
          ),
      };
    default:
      return state;
  }
};
export default EditReducer;
