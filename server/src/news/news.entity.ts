import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, ManyToMany, JoinTable, Relation} from 'typeorm'
import {User} from '../users/users.entity'
import {Comment} from "../comments/comments.entity";


@Entity()
export class News {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    text: string

    @CreateDateColumn({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP(6)'})
    created_at: Date

    @ManyToOne(() => User, (user) => user.news)
    author: User

    @ManyToMany(() => Category)
    @JoinTable()
    category: Category[]

    @ManyToOne(() => Region, (region) => region.news)
    region: Relation<Region>

    @OneToMany(() => Comment, (comment) => comment.news)
    comments: Comment[]

    @OneToMany(() => Image, (image) => image.news)
    images: Image[]
}

@Entity()
export class Region {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    region: string

    @OneToMany(() => News, (news) => news.region)
    news: News
}


@Entity()
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    category: string
}


@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    url: string

    @ManyToOne(() => News, (news) => news.images)
    news: News
}


