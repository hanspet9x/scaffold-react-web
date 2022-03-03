import { IResponse } from "../api/api.types";
import { makeRequest } from "../api/makeRequest";
import UserResponseDTO from "./dtos/user.res.dto";
import { IUserResponse } from "./interfaces/user.response.types";

export default class UserService {

    static async login(){
        try {
            const res = await makeRequest<IUserResponse>({
                url: '',
            })
            return new UserResponseDTO(res.data);
        } catch (error) {
            throw error;
        }
    }

    static register() {

    }

    static refreshToken() {

    }

    static initializeForgotPassword(){

    }

}