import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User, Role} from './user.entity'


@Module({
    imports: [TypeOrmModule.forFeature([User, Role])],
    providers: [],
    controllers: [],
})
export class UsersModule {}