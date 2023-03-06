import { createStore, combineReducers } from "redux";

import { user } from "./Reducer/user.reducer";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({ user }),
  );

  return store ;
};