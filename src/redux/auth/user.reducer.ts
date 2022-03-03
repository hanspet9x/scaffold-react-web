import { IAction } from "../action";
import { IUser } from "./user.types";

const userState:IUser = {
    username: '',
    email: ''
};

export const userReducer = (state = userState, action: IAction<IUser>) => {
    switch (action.type) {
        case 'userData':
        return {...state, userData: action.payload}
        default:
            return state;
    }
}