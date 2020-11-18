import { ObjectType, Field } from 'type-graphql'
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm'
import { BookSection } from './BookSection'

@ObjectType()
@Entity()
export class SectionHighlight extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    note!: string

    @ManyToOne(() => BookSection, (bookSection) => bookSection.sectionHighlights)
    bookSection!: BookSection

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date
}
