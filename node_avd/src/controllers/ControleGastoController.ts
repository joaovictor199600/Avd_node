import { Request, Response } from 'express'
import { ControleGastoServices } from '../services/ControleGastoServices'

class ControleGastoController {

  async create(request: Request, response: Response) {
    let { responsavel_id, despesa_id } = request.body

    const controleGastoServices = new ControleGastoServices()

    const controleGasto = await controleGastoServices.create({
      responsavel_id, despesa_id
    })

    return response.json(controleGasto)
  }

  async index(request: Request, response: Response) {
    const controleGastoServices = new ControleGastoServices()
    try {
      const controleGasto = await controleGastoServices.index()
      return response.json(controleGasto)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async show(request: Request, response: Response) {
    const controleGastoServices = new ControleGastoServices()
    const { id } = request.params

    try {
      const controleGasto = await controleGastoServices.show({ id })
      return response.json(controleGasto)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async delete(request: Request, response: Response) {
    const controleGastoServices = new ControleGastoServices()
    const { id } = request.params

    try {
      await controleGastoServices.delete({ id })
      return response.json({ message: 'Despesa Id deletada com sucesso' })
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }

  async update(request: Request, response: Response) {
    let { responsavel_id, despesa_id } = request.body
    //dataservico = new Date(dataservico)
    const { id } = request.params

    const controleGastoServices = new ControleGastoServices()

    try {
      const controleGasto = await controleGastoServices.update({
        id, responsavel_id, despesa_id
      })
      return response.json(controleGasto)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }
}

export { ControleGastoController }