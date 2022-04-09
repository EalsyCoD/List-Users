import { EditUserState, EditUserAction } from '../../types';

const initialState: EditUserState = {
  items: [],
};

const EditReducer = (
  state: EditUserState = initialState,
  action: EditUserAction,
): EditUserState => {
  switch (action.type) {
    case 'EDIT-USER':
      console.log(action.payload);
      return {
        items: state.items.map((item: any) =>
          item.id === action.payload.id ? { ...action.payload } : item,
        ),
      };
    default:
      return state;
  }
};
export default EditReducer;
