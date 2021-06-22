import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ControleGastos1624300376433 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'controlegasto',
                columns: [
                    {
                        name: 'id',
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: 'responsavel_id',
                        type: "uuid",
                    },
                    {
                        name: 'despesa_id',
                        type: 'uuid'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                ],
                foreignKeys: [
                    {
                        name: 'FKResponsavel',
                        referencedTableName: 'responsaveis',
                        referencedColumnNames: ['id'],
                        columnNames: ['responsavel_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    },
                    {
                        name: 'FKDespesa',
                        referencedTableName: 'despesas',
                        referencedColumnNames: ['id'],
                        columnNames: ['despesa_id'],
                        onDelete: 'SET NULL',
                        onUpdate: 'SET NULL'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('controlegasto')
    }

}
