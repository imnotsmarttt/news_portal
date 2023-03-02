import {Controller, Post, Put, Delete, Get} from "@nestjs/common";
import {CommentsService} from './comment.service'

@Controller('/comment')
export class CommentController {
    constructor(
        private commentsService: CommentsService
    ) {
    }
    @Post()
    create() {

    }

    @Put('/:id')
    update() {

    }

    @Delete('/:id')
    delete() {

    }

    @Get('/:id')
    getOne() {

    }
}