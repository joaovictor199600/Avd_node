import { getCustomRepository } from 'typeorm'
import { DespesasRepository } from '../repositories/DespesasRepository'

interface IDespesasCreate {
  datacompra: Date;
  localcompra: string;
  valor: number;
}

interface IDespesasShow {
  id: string;
}

interface IDespesasUpdate {
  id: string;
  datacompra: Date;
  localcompra: string;
  valor: number;
}

class DespesasServices {

  async create({ datacompra, localcompra, valor }: IDespesasCreate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = despesasRepository.create({
      datacompra,
      localcompra,
      valor
    })

    await despesasRepository.save(despesas)

    return despesas;

  }

  async index() {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.find()

    return despesas;
  }

  async show({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error('Despesas id nao econtrada!!')
    }

    return despesas
  }

  async delete({ id }: IDespesasShow) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    const despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error('ID não existe!!')
    }

    return await despesasRepository.delete({ id })
  }

  async update({ id, datacompra, localcompra, valor }: IDespesasUpdate) {
    const despesasRepository = getCustomRepository(DespesasRepository)

    let despesas = await despesasRepository.findOne({ id })

    if (!despesas) {
      throw new Error(' Despesas ID não existe!!')
    }

    let despesasUpdated = await despesasRepository.update(id, {
      datacompra,
      localcompra,
      valor
    })

    despesas = await despesasRepository.findOne({ id })

    return despesas
  }
}

export { DespesasServices }
