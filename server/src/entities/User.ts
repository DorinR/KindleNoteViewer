import { ObjectType, Field } from 'type-graphql'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { Book } from './Book'

@ObjectType()
@Entity()
export class User extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column({ unique: true })
    email!: string

    @Column()
    password!: string

    @OneToMany(() => Book, (book) => book.owner)
    books!: Book[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date()

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date()
}
