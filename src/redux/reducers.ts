import { combineReducers } from "redux";
import { userReducer } from "./auth/user.reducer";
import { IRootState } from "./state";

const appStoreReducer: Record<keyof IRootState, any> = {
  userData: userReducer
}
export const combinedReducers = combineReducers(appStoreReducer);