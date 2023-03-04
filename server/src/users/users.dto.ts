interface RoleDto {
    id: number;
    role: string;
}

export interface UsersDto {
    id: number;
    username: string;
    email: string;
    roles: RoleDto[];
}

export interface UserProfileDto extends UsersDto {
    full_name: string;
}

export interface UserJwtDto extends UserProfileDto{
    created_at: Date;
    iat: number;
    exp: number;
}