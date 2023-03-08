import {Controller, Post, Get, Put, Delete, UseGuards, SetMetadata} from "@nestjs/common";
import {NewsService} from "./news.service";
import RoleGuard from "../roles/roles.guard";
import {JwtGuard} from "../auth/guards/jwt-auth.guard";

export const Roles = (role: string) => SetMetadata('role', role);

@Controller('/news')
export class NewsController {
    constructor(
        private newsService: NewsService
    ) {
    }


    @UseGuards(JwtGuard)
    @Roles('USER')
    @UseGuards(RoleGuard)
    @Post()
    create() {
        return 'Hello)'
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