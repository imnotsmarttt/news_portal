import {UserDto} from "../users/users.dto";


export interface AuthDto {
    user: UserDto,
    token: string
}