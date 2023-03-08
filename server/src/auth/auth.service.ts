import {Injectable} from '@nestjs/common';
import {UsersService} from "../users/users.service";
import * as bcrypt from 'bcrypt'
import {UserDto} from "../users/users.dto";
import {JwtService} from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {
    }

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.usersService.getOne({email})
        if (user) {
            const comparePassword = await bcrypt.compare(password, user.password)
            if (comparePassword) {
                const {password, ...result} = user
                return result
            }
        }
        return null
    }

    login(user: UserDto) {
        const payload: UserDto = user
        return {
            token: this.jwtService.sign(payload)
        }

    }
}
