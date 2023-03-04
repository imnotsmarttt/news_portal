import {UsersDto} from "../users/users.dto";


export interface RegisterDto {
    user: UsersDto,
    token: string
}