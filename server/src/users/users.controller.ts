import {Controller, Get, Put, Delete, Post, Body, Request, UseGuards} from "@nestjs/common";
import {UsersService} from "./users.service";
import {User} from './user.entity'
import * as bcrypt from 'bcrypt'
import {BCRYPT_SALT} from "../../config";
import {JwtGuard} from "../auth/guards/jwt-auth.guard";

@Controller('/users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {
    }

    @UseGuards(JwtGuard)
    @Get('/me')
    async profile(@Request() req) {
        return req.user
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