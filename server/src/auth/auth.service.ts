import { Injectable } from '@nestjs/common';
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'
import {UserLoginDto} from "../users/user.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.getOne({email})
        const comparePassword = await bcrypt.compare(password, user.password)
        if (user && comparePassword) {
            const {password, ...result} = user
            return result
        }
        return null
    }

    async login(user: UserLoginDto) {
        const payload: UserLoginDto = user
        return {
            token: this.jwtService.sign(payload)
        }

    }
}
