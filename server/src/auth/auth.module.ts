import {Module, Global} from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {PassportModule} from "@nestjs/passport";
import {LocalStrategy} from "./strategies/local.strategy";
import {UsersModule} from "../users/users.module";
import {JwtModule} from "@nestjs/jwt";
import {JWT_SECRET_KEY} from "../../config";
import {JwtStrategy} from "./strategies/jwt.strategy";

@Global()
@Module({
    imports: [
        JwtModule.register({
            secret: JWT_SECRET_KEY,
            signOptions: {expiresIn: '60m'}
        }),
        UsersModule, PassportModule],
    exports: [JwtModule],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule {
}
