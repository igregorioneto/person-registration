import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createPerson1645535342274 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: 'person',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'phone',
                        type: 'varchar',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                    },
                    {
                        name: 'photo_url',
                        type: 'varchar',
                    },
                    {
                        name: 'profession_id',
                        type: 'uuid',
                        isPrimary: false,
                        generationStrategy: 'uuid'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('person');
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
