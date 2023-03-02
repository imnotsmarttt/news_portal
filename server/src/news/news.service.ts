import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {News} from "./news.entity";
import {Repository} from "typeorm";

@Injectable()
export class NewsService {
    constructor(
        @InjectRepository(News)
        private newsRepository: Repository<News>

    ) {}

    async create () {

    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {

    }

    async update() {

    }
}