import { IUserResponse } from "../interfaces/user.response.types";

export default class UserResponseDTO {
    username: string;
    email: string;
    constructor(data: IUserResponse) {
        this.email = data.email;
        this.username = data.name;
    }
}