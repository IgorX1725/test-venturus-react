import crypto from 'crypto'

interface TeamInterface {
    id: string;
    name: string;
    description: string;
    website: string;
    type: 'real' | 'fantasy';
    tags: string[];
}

class TeamsRepository{
    private teamsList: TeamInterface[]

    constructor() {
        this.teamsList = [
            {
                id: "d94fd8ec",
                name: "Barcelona",
                description: "Barcelona squad",
                website: 'http://barcelona.com',
                type: 'real',
                tags: ['team', 'European']
            },
            {
                id: "568ee268",
                name: "Real Madrid",
                description: "Real Madrid squad",
                website: 'http://realmadrid.com',
                type: 'real',
                tags: ['team', 'European']
            },
            {
                id: "36dc4f6b",
                name: "Milan",
                description: "Milan Squad",
                website: 'http://barcelona.com',
                type: 'real',
                tags: ['team', 'Italian']
            }
        ]
    }

    public list():object[]{
        return this.teamsList;
    }

    public getById(id:string):object{
        const team = this.teamsList.find(team=>team.id === id)

        return {...team}
    }

    public create(TeamData: TeamInterface):object {

        const id = crypto.randomBytes(4).toString('hex')
    
        Object.assign(TeamData, { id });

        this.teamsList.push(TeamData);
    
        return TeamData;
    }

    public update(TeamData: TeamInterface, id:string):object{
        const indexTeam = this.teamsList.findIndex(team => team.id == id)

        Object.assign(TeamData, { id });

        this.teamsList[indexTeam] = TeamData
        
        return TeamData
    }

    public delete(id:string){
        const indexTeam = this.teamsList.findIndex(team=> team.id === id)

        this.teamsList.splice(indexTeam,1)
    }
    

}

export default TeamsRepository