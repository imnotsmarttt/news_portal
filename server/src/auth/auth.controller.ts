import {Request, Controller, Post, UseGuards, Body} from '@nestjs/common';
import {LocalAuthGuard} from "./guards/local.auth-guard";
import {AuthService} from "./auth.service";
import {BCRYPT_SALT} from "../../config";
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'
import {AuthDto} from "./auth.dto";
import {UserDto} from "../users/users.dto";

@Controller('/auth')
export class AuthController {
    constructor(
        private authService: AuthService,
        private usersService: UsersService
    ) {}

    @Post('/register')
    async register(
        @Body('username') username: string, @Body('email') email: string,
        @Body('full_name') full_name: string, @Body('password') password: string,
    ): Promise<AuthDto> {
        await this.usersService.checkIfUserExist(username, email)

        const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT)
        const createdUser = await this.usersService.create(username, email, full_name, hashedPassword)

        const response: AuthDto = {
            user: createdUser,
            token: this.authService.login(createdUser).token,
        }
        return response
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user)
    }
}
