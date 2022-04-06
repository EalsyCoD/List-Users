import { NotificationState, NotificationAction } from "../../types";

const initialState: NotificationState = {
  message: null,
  status: null,
};

const notificationReducer = (
  state: NotificationState = initialState,
  action: NotificationAction
): NotificationState => {
  switch (action.type) {
    case "NEW-NOTIFICATION":
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    case "CLEAR-NOTIFICATION":
      return {
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default notificationReducer;
