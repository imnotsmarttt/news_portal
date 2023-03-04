import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn} from 'typeorm';
import {News} from '../news/news.entity';
import {User} from '../users/users.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    text: string

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
    created_at: Date

    @ManyToOne(() => User, (author) => author.comments)
    author: User

    @ManyToOne(() => News, (news) => news.comments)
    news: News
}