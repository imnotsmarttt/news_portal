import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User, Role} from './users.entity'
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";


@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    exports: [UsersService],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}