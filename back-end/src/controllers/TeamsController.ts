import { Request, Response } from 'express';

import TeamsRepository from '../repository/TeamsRepository'

class TeamsController {

    constructor(
        private teamsRepository:TeamsRepository
    ){}

    public index(request: Request, response: Response): Response {
        
        const teamList = this.teamsRepository.list()
        return response.json(teamList)
    }

    public show(request: Request, response: Response): Response{

        const id = request.params.id
        
        const team = this.teamsRepository.getById(id)

        return response.json(team)
    }

    public create(request: Request, response: Response): Response {
        const teamData = request.body
        const team = this.teamsRepository.create(teamData)

        return response.json(team)
    }

    public update(request: Request, response: Response): Response {
        const id = request.params.id
        const teamData = request.body

        const teamUpdated = this.teamsRepository.update(teamData, id)

        return response.json(teamUpdated)
    }

    public delete(request: Request, response: Response): Response {
        const id = request.params.id

        this.teamsRepository.delete(id)

        return response.status(204).send()
    }
}
export default TeamsController