import {Request, Controller, Post, UseGuards, Body} from '@nestjs/common';
import {LocalAuthGuard} from "./guards/local.auth-guard";
import {AuthService} from "./auth.service";
import {User} from "../users/user.entity";
import {BCRYPT_SALT} from "../../config";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'

@Controller('/auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) {
    }

    @Post('/register')
    async register(
        @Body('username') username: string, @Body('email') email: string,
        @Body('full_name') full_name: string, @Body('password') password: string,
    ): Promise<User | object> {
        const checkUsername = await this.usersService.getOne({username})
        if (checkUsername) {
            return {'error': 'user with this username exist'}
        }
        const checkEmail = await this.usersService.getOne({email})
        if (checkEmail) {
            return {'error': 'user with this email exist'}
        }
        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT)
        const createdUser = await this.usersService.create(username, email, full_name, hashedPassword)
        return createdUser
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
}
