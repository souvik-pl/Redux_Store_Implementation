import createStore, { State, Store } from "redux-lib";
import { userReducer } from "./Reducer.ts";
import { DEFAULT_PROFILE_PHOTO } from "../_shared/constants.ts";

const initialState: State = {
  user: {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    contact: "+91-9000000000",
    profilePhoto: DEFAULT_PROFILE_PHOTO,
  },
};

export const store: Store = createStore(userReducer, initialState);
