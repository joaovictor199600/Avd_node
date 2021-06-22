import { Request, Response } from 'express'
import { DespesasServices } from '../services/DespesasServices'

class DespesasController {

  async create(request: Request, response: Response) {
    const { datacompra, localcompra, valor } = request.body

    const despesasServices = new DespesasServices()

    const despesas = await despesasServices.create({ datacompra, localcompra, valor })

    return response.json(despesas)
  }

  async index(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    try {
      const despesas = await despesasServices.index()
      return response.json(despesas)

    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })

    }
  }

  async show(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    const { id } = request.params;

    try {
      const despesas = await despesasServices.show({ id })
      return response.json(despesas)

    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const despesasServices = new DespesasServices()
    const { id } = request.params;

    try {
      const despesas = await despesasServices.delete({ id })
      return response.json({ message: 'Despesa id deletada com sucesso' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
  /* 
    async update(request: Request, response: Response) {
      const despesasServices = new DespesasServices()
      const { id } = request.params;
      const { des, price } = request.body
  
      try {
        const services = await despesasServices.update({ id, service, price })
        return response.json(services)
      } catch (err) {
        return response
          .status(400)
          .json({ message: err.message })
      }
    } */
}

export { DespesasController }
