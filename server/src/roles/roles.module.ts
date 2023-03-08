import {Module} from "@nestjs/common";
import {APP_GUARD} from "@nestjs/core";
import RoleGuard from "./roles.guard";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Role} from "./roles.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Role])],
    providers: [
        {
            provide: APP_GUARD,
            useClass: RoleGuard,
        },
    ],
    exports: [RolesModule]
})
export class RolesModule {
}