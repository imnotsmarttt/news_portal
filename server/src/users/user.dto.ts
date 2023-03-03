interface RoleDto {
    id: number;
    role: string;
}

export interface UserLoginDto {
    id: number;
    username: string;
    roles: string
}