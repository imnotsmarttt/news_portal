import {Injectable, HttpException, HttpStatus} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

import {User, Role} from './users.entity';
import {UsersDto} from "./users.dto";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {}

    async checkIfUserExist(username: string, email: string) {
        const checkUsername = await this.getOne({username})
        if (checkUsername) {
            throw new HttpException('User with this username is exist', HttpStatus.CONFLICT)
        }
        const checkEmail = await this.getOne({email})
        if (checkEmail) {
            throw new HttpException('User with this email is exist', HttpStatus.CONFLICT)
        }
    }

    async create(username: string, email: string, fullname: string, pass: string): Promise<UsersDto> {
        const newUser = await this.userRepository.create({username, email, full_name: fullname, password:pass})
        const newUserRole = await this.roleRepository.findOne({where: {role: 'USER'}})
        newUser.roles = [newUserRole]
        await this.userRepository.save(newUser)
        const {password, full_name, created_at, ...result} = newUser
        return result
    }

    async getOne(query: object): Promise<User | undefined> {
        const user = await this.userRepository.findOne({
            where: query,
            relations: {
                roles: true
            },
        })
        return user
    }

    getAll() {

    }

    delete() {

    }

    update() {

    }
}