import { Router } from 'express'

import { ResponsaveisController } from './controllers/ResponsaveisController'

import { DespesasController } from './controllers/DespesasController'

//import { ControleGastoController } from './controllers/ControleGastoController'

const routes = Router();

const responsaveisController = new ResponsaveisController()

const despesasController = new DespesasController()

//const controleGastoController = new ControleGastoController()

routes.post('/responsaveis', responsaveisController.create)
routes.get('/responsaveis', responsaveisController.index)
routes.get('/responsaveis/:id', responsaveisController.show)


routes.post('/despesas', despesasController.create)
routes.get('/despesas', despesasController.index)
routes.get('/despesas/:id', despesasController.show)
routes.delete('/despesas/:id', despesasController.delete)
//routes.put('/despesas/:id', despesasController.update)

/* routes.post('/controlegasto', controleGastoController.create)
routes.get('/controlegasto', controleGastoController.index)
routes.get('/controlegasto/:id', controleGastoController.show)
routes.delete('/controlegasto/:id', controleGastoController.delete)
routes.put('/controlegasto/:id', controleGastoController.update) */

export { routes }

