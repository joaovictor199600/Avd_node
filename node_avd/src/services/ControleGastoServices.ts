import { getCustomRepository } from 'typeorm'
import { ControleGastoRepository } from '../repositories/ControleGastoRepository'

interface IControleGastoCreate {
  responsavel_id: string;
  despesa_id: string;
  /* quantidade: number;
  dataservico: Date; */
}

interface IControleGastoUpdate {
  id: string;
  responsavel_id: string,
  despesa_id: string,
}

interface IControleGastoShow {
  id: string
}


class ControleGastoServices {
  async create({ responsavel_id, despesa_id }: IControleGastoCreate) {
    const controleGastoRepository = getCustomRepository(ControleGastoRepository)

    const controleGasto = controleGastoRepository.create({
      responsavel_id,
      despesa_id
    })

    await controleGastoRepository.save(controleGasto)

    return controleGasto
  }
  async index() {
    const controleGastoRepository = getCustomRepository(ControleGastoRepository)

    const controleGasto = await controleGastoRepository.find({
      relations: ['responsavel', 'despesa']
    })

    return controleGasto
  }

  async show({ id }: IControleGastoShow) {
    const controleGastoRepository = getCustomRepository(ControleGastoRepository)

    const controleGasto = await controleGastoRepository.findOne(id, {
      relations: ['responsavel', 'despesa']
    })

    return controleGasto
  }

  async delete({ id }: IControleGastoShow) {
    const controleGastoRepository = getCustomRepository(ControleGastoRepository)

    const controleGasto = await controleGastoRepository.findOne({ id })

    if (!controleGasto) {
      throw new Error('Despesa ID não encontrada!')
    }

    return await controleGastoRepository.delete({ id })
  }

  async update({ id, responsavel_id, despesa_id }: IControleGastoUpdate) {
    const controleGastoRepository = getCustomRepository(ControleGastoRepository)

    let controleGastoD = await controleGastoRepository.findOne({ id })

    if (!controleGastoD) {
      throw new Error('Service ID not found!!!')
    }

    const controleGastoUpdated = await controleGastoRepository.update(id, {
      responsavel_id,
      despesa_id,
    })

    controleGastoD = await controleGastoRepository.findOne(id)

    return controleGastoD
  }

}

export { ControleGastoServices }