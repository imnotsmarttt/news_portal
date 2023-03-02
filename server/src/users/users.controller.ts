import {Controller, Get, Put, Delete} from "@nestjs/common";
import {UsersService} from "./users.service";

@Controller('/users')
export class UsersController {
    constructor(
       private usersService: UsersService
    ) {}
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