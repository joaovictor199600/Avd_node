import { Request, Response } from 'express'
import { ResponsaveisServices } from '../services/ResponsaveisServices'

class ResponsaveisController {

  async create(request: Request, response: Response) {
    const { responsavel, telefone } = request.body

    const responsaveisServices = new ResponsaveisServices()

    const responsaveis = await responsaveisServices.create({ responsavel, telefone })

    return response.json(responsaveis)

  }
  async index(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()

    try {
      const responsaveis = await responsaveisServices.index()
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }

  }
  async show(request: Request, response: Response) {
    const responsaveisServices = new ResponsaveisServices()
    // parametro na rota - request.params
    const { id } = request.params
    // const id = request.params.id

    try {
      const responsaveis = await responsaveisServices.show({ id })
      return response.json(responsaveis)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message })
    }
  }


  /*  async index(request: Request, response: Response) {
     const clientsServices = new ClientsServices()
 
     try {
       const clients = await clientsServices.index()
       return response.json(clients)
     } catch (err) {
       return response
         .status(400)
         .json({ message: err.message })
     }
   }
 
   async show(request: Request, response: Response) {
     const clientsServices = new ClientsServices()
     // parametro na rota - request.params
     const { id } = request.params
     // const id = request.params.id
 
     try {
       const clients = await clientsServices.show({ id })
       return response.json(clients)
     } catch (err) {
       return response
         .status(400)
         .json({ message: err.message })
     }
   }
 
   async delete(request: Request, response: Response) {
     const clientsServices = new ClientsServices()
     // parametro na rota - request.params
     const { id } = request.params
     // const id = request.params.id
 
     try {
       const clients = await clientsServices.delete({ id })
       return response.json({ message: 'User id deleted successfully !!' })
     } catch (err) {
       return response
         .status(400)
         .json({ message: err.message })
     }
   }
 
   async update(request: Request, response: Response) {
     const { cliente, telefone, email } = request.body
     const { id } = request.params
 
     const clientsServices = new ClientsServices()
 
     try {
       const clients = await clientsServices.update({ id, cliente, telefone, email })
       return response.json(clients)
     } catch (err) {
       return response
         .status(400)
         .json({ message: err.message })
     }
   }
  */
}

export { ResponsaveisController }

// rotas (/clients) - get/post/put/delete
// controller - responsabilidade de pegar as informações da rota
// services - responsabilidade da regra de negócio da aplicação e devolver
//            para o controller
// MVC - M (Model) - V (View) - C (Controller)
// Arquitetura de sofware

// Métodos do controller
// create() - Gravar registro
// index() - listar todos os registros
// show() - listar um único registro
// update() - Alterar registro
// delete() - Excluir registro