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
import { Book } from './Book'
import { SectionHighlight } from './SectionHighlight'

@ObjectType()
@Entity()
export class BookSection extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number

    @Field()
    @Column()
    sectionTitle!: string

    @OneToMany(() => SectionHighlight, (sectionHighlight) => sectionHighlight.bookSection)
    sectionHighlights: SectionHighlight[]

    @ManyToOne(() => Book, (book) => book.sections)
    book!: Book

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date
}
