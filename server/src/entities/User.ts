import { ObjectType, Field } from 'type-graphql'
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

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

    @Field(() => String)
    @CreateDateColumn()
    createdAt = new Date()

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt = new Date()
}
