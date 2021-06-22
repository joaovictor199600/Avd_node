import { getCustomRepository } from 'typeorm'
import { ResponsaveisRepository } from '../repositories/ResponsaveisRepository'

interface IResponsaveisCreate {
  responsavel: string;
  telefone: string;
}

interface IResponsaveisShow {
  id: string
}


class ResponsaveisServices {

  async create({ responsavel, telefone }: IResponsaveisCreate) {

    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = responsaveisRepository.create({
      responsavel,
      telefone
    })
    await responsaveisRepository.save(responsaveis)

    return responsaveis
  }


  async index() {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.find()

    return responsaveis;
  }

  async show({ id }: IResponsaveisShow) {
    const responsaveisRepository = getCustomRepository(ResponsaveisRepository)

    const responsaveis = await responsaveisRepository.findOne({ id })

    console.log(responsaveis)

    if (!responsaveis) {
      throw new Error('Responsavel id nao encontrado!!')
    }

    return responsaveis;
  }


}

export { ResponsaveisServices }