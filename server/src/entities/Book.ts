import { ObjectType, Field } from 'type-graphql'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { BookSection } from './BookSection'
import { User } from './User'

@ObjectType()
@Entity()
export class Book extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    title!: string

    @Field()
    @Column()
    author!: string

    @OneToMany(() => BookSection, (bookSection) => bookSection.book)
    sections!: BookSection[]

    @ManyToOne(() => User, (user) => user.books)
    owner!: User

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date
}
