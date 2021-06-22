import { EntityRepository, Repository } from 'typeorm'
import { ControleGasto } from '../entities/ControleGasto'

@EntityRepository(ControleGasto)
class ControleGastoRepository extends Repository<ControleGasto> {

}

export { ControleGastoRepository }
