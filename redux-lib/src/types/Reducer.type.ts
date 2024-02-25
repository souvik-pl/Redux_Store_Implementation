import { Action } from "./Action.type";
import { State } from "./State.type";

export type Reducer = (state: State, action: Action) => State;
