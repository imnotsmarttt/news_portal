import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {News, Category, Image} from './news.entity'
import {NewsController} from "./news.controller";
import {NewsService} from "./news.service";

@Module({
    imports: [TypeOrmModule.forFeature([News, Category, Image])],
    providers: [NewsService, ],
    controllers: [NewsController]
})
export class NewsModule {
}