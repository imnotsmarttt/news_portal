import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {JwtService} from "@nestjs/jwt";
import {Reflector} from "@nestjs/core";

@Injectable()
class RoleGuard implements CanActivate {
    constructor(private readonly reflector: Reflector, private readonly jwtService: JwtService) {
    }

    canActivate(context: ExecutionContext) {
        const role = this.reflector.get<string[]>('role', context.getHandler());
        if (!role) {
            return true;
        }
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization.split(' ')[1];
        if (!token) {
            return false
        }

        try {
            const payload = this.jwtService.verify(token);
            request.user = payload;
            const hasRole = payload.roles.some(r => {
                return r.role === role
            })
            return hasRole
        } catch (err) {
            return false;
        }
    }
}


export default RoleGuard;