import { Action } from "./Action.type";
import { CallbackFn } from "./CallbackFn.type";
import { State } from "./State.type";

export type Store = {
  getState: () => State;
  subscribe: (callback: CallbackFn) => {
    unsubscribe: () => void;
  };
  dispatch: (action: Action) => Action;
};
