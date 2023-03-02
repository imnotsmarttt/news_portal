import {Controller, Post, Get, Put, Delete} from "@nestjs/common";
import {NewsService} from "./news.service";


@Controller('/news')
export class NewsController {
    constructor(
        private newsService: NewsService
    ) {}

    @Post()
    create () {

    }

    @Get()
    getAll() {

    }

    @Get('/:id')
    getOne() {

    }


    @Delete('/:id')
    delete() {

    }

    @Put('/:id')
    update() {

    }
}