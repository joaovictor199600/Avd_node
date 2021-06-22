import { Entity, PrimaryColumn, CreateDateColumn, Column, UpdateDateColumn, JoinColumn, ManyToOne } from 'typeorm'

import { v4 as uuid } from 'uuid'

import { Responsavel } from './Responsavel';
import { Despesa } from './Despesa'

@Entity('controlegasto')
class ControleGasto {

  @PrimaryColumn()
  id: string;

  @JoinColumn({ name: 'responsavel_id' })
  @ManyToOne(() => Responsavel)
  responsavel: Responsavel;

  @Column()
  responsavel_id: string;

  @JoinColumn({ name: 'despesa_id' })
  @ManyToOne(() => Despesa)
  despesa: Despesa;

  @Column()
  despesa_id: string;


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

export { ControleGasto }