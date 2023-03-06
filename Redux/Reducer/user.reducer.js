import { USERNAME, USERSURNAME } from "../ActionTypes";

export const user = (
  state = {
    username: "",
    usersurname: "",
  },
  action
) => {
  switch (action.type) {
    case USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    case USERSURNAME: {
      return {
        ...state,
        usersurname: action.payload,
      };
    }
    default:
      return state;
  }
};
