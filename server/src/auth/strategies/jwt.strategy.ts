import {Injectable} from "@nestjs/common";
import {PassportStrategy} from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt'
import {JWT_SECRET_KEY} from "../../../config";
import {UserJwtDto, UserProfileDto} from "../../users/users.dto";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: JWT_SECRET_KEY,
        });
    }

    async validate(payload: UserJwtDto): Promise<UserProfileDto> {
        const {created_at, iat, exp, ...user} = payload
        return user
    }

}