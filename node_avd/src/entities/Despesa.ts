import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid'

@Entity("despesas")
class Despesa {

  @PrimaryColumn()
  id: string;

  @Column()
  datacompra: Date;

  @Column()
  localcompra: string;

  @Column()
  valor: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {

    if (!this.id) {
      this.id = uuid()
    }

  }

}

export { Despesa }