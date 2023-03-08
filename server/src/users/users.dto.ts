import {RoleDto} from '../roles/roles.dto'

export interface UserDto {
    id: number;
    username: string;
    email: string;
    roles: RoleDto[];
}

export interface UserProfileDto extends UserDto {
    full_name: string;
}

export interface UserJwtDto extends UserProfileDto{
    created_at: Date;
    iat: number;
    exp: number;
}