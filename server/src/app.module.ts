import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";

import {DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME} from "../config";
import {User, Role} from './users/user.entity'
import {News, Category, Image, Region} from "./news/news.entity";
import {Comment} from "./comments/comments.entity";

import {UsersModule} from "./users/users.module";
import {NewsModule} from "./news/news.module";
import {CommentsModule} from "./comments/comments.module";
import { AuthModule } from './auth/auth.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: DB_HOST,
            port: DB_PORT,
            username: DB_USERNAME,
            password: DB_PASSWORD,
            database: DATABASE,
            entities: [User, Role, News, Category, Image, Comment, Region],
            synchronize: true,
        }),
        UsersModule,
        NewsModule,
        CommentsModule,
        AuthModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
