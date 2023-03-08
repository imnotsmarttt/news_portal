import {Controller, Get, Put, Delete, Request, UseGuards, Param} from '@nestjs/common';

import {UsersService} from './users.service';

import {JwtGuard} from '../auth/guards/jwt-auth.guard';
import {UserDto, UserProfileDto} from './users.dto';

@Controller('/users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {
    }

    @UseGuards(JwtGuard)
    @Get('/me')
    profile(@Request() req): UserDto  {
        return req.user
    }

    @Get('/:id')
    async getOne(@Param('id') id): Promise<UserProfileDto> {
        const {password, created_at, ...user} = await this.usersService.getOne({id})
        return user
    }

    @Delete('/:id')
    delete() {

    }

    @Put('/:id')
    update() {

    }

    @Get()
    getAll() {

    }
}