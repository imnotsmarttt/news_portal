import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, ManyToMany, JoinTable, CreateDateColumn} from "typeorm";
import {News} from "../news/news.entity";
import {Comment} from "../comments/comments.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    username: string

    @Column()
    full_name: string

    @Column()
    password: string

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @ManyToMany(() => Role)
    @JoinTable()
    roles: Role[]

    @OneToMany(() => News, (news) => news.author)
    news: News[]

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[]
}

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    role: string
}