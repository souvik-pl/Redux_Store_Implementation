import { Action, State } from "redux-lib";
import { USER_ACTIONS } from "./ActionList.ts";

export function userReducer(state: State = {}, action: Action) {
  switch (action.type) {
    case USER_ACTIONS.UPDATE_PHOTO:
      return {
        ...state,
        user: {
          ...state.user,
          profilePhoto: action.payload.profilePhoto,
        },
      };
    default:
      return state;
  }
}
