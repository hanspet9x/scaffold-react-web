import { IRootState } from "./state";

export interface IAction<T>{
    payload: T;
    type: keyof IRootState
}