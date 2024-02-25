import { Action } from "./types/Action.type";
import { ActionList } from "./types/ActionList.type";
import { CallbackFn } from "./types/CallbackFn.type";
import { Reducer } from "./types/Reducer.type";
import { State } from "./types/State.type";
import { Store } from "./types/Store.type";

const createStore = (reducer: Reducer, initialState: State): Store => {
  let state: State = initialState;
  const listeners = new Set<CallbackFn>();

  const getState = (): State => {
    return state;
  };

  const subscribe = (callback: CallbackFn) => {
    listeners.add(callback);

    return {
      unsubscribe: () => {
        listeners.delete(callback);
      },
    };
  };

  const dispatch = (action: Action): Action => {
    state = reducer(state, action);
    listeners.forEach((callback) => callback());

    return action;
  };

  return {
    getState,
    subscribe,
    dispatch,
  };
};

export { Action, State, ActionList, Store };
export default createStore;
