import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {User, Role} from './user.entity'
import {Repository} from "typeorm";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,

        @InjectRepository(Role)
        private roleRepository: Repository<Role>
    ) {
    }

    async create(username: string, email: string, full_name: string, password: string): Promise<User> {
        const newUser = await this.userRepository.create({username, email, full_name, password})
        const newUserRole = await this.roleRepository.findOne({where: {role: 'USER'}})
        newUser.roles = [newUserRole]
        await this.userRepository.save(newUser)
        return newUser
    }

    getAll() {

    }

    async getOne(query: object): Promise<User | undefined> {
        return await this.userRepository.findOne({
            where: query,
            relations: {
                roles: true
            }
        })

    }

    delete() {

    }

    update() {

    }
}