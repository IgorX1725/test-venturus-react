import {Router} from 'express'
import TeamsController from '../controllers/TeamsController'
import TeamsRepository from '../repository/TeamsRepository'

const teamsRoute = Router()

const teamsController = new TeamsController(new TeamsRepository())

teamsRoute.get('/:id',teamsController.show.bind(teamsController))
teamsRoute.get('/',teamsController.index.bind(teamsController))
teamsRoute.post('/',teamsController.create.bind(teamsController))
teamsRoute.put('/:id',teamsController.update.bind(teamsController))
teamsRoute.delete('/:id',teamsController.delete.bind(teamsController))

export default teamsRoute