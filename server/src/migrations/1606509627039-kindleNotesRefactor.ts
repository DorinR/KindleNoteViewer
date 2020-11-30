import { MigrationInterface, QueryRunner } from 'typeorm'

export class kindleNotesRefactor1606509627039 implements MigrationInterface {
    name = 'kindleNotesRefactor1606509627039'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "owner" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "book_section" ("id" SERIAL NOT NULL, "sectionHeading" character varying NOT NULL, "owner" character varying NOT NULL, "book" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_6edda19654147368603ac44072e" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "section_highlight" ("id" SERIAL NOT NULL, "note" character varying NOT NULL, "owner" character varying NOT NULL, "section" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a4e0481c514f345a8789a1e1146" PRIMARY KEY ("id"))`
        )
        await queryRunner.query(
            `CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user"`)
        await queryRunner.query(`DROP TABLE "section_highlight"`)
        await queryRunner.query(`DROP TABLE "book_section"`)
        await queryRunner.query(`DROP TABLE "book"`)
    }
}
