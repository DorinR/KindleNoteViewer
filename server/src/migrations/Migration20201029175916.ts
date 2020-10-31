import { Migration } from '@mikro-orm/migrations';

export class Migration20201029175916 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" add column "created_by" text not null;');
  }

}
