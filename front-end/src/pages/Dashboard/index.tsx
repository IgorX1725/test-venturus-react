import React, { useEffect, useState } from 'react'
import { Container, Header, Title } from './styles'
import { VscAdd } from 'react-icons/vsc'
import api from '../../services/api'
import { Link } from 'react-router-dom'
import { Tablelist, Iconslist } from './styles'
import { TiArrowUnsorted } from 'react-icons/ti'
import { MdDelete, MdEdit } from 'react-icons/md'
import { IoMdShare } from 'react-icons/io'


interface TeamState {
    id: string;
    name: string;
    description: string;
    website: string;
    type: 'real' | 'fantasy';
    tags: string[];
}

const Dashboard: React.FC = () => {
    const [teams, setTeams] = useState<TeamState[]>([]);

    useEffect(() => {
        api.get('/teams').then(response => {
            setTeams(response.data)
        })
    }, [])

    const handleDeleteTeam = async (id: string) => {
        await api.delete(`/teams/${id}`)
        const result = teams.filter(team=>team.id !== id)
        setTeams(result)
    }

    const sortBy = (type: 'name' | 'description') => {

        const sorted: TeamState[] = [...teams].sort((a, b) => {

            return a[type].localeCompare(b[type], 'br', { ignorePunctuation: true })
        })

        setTeams(sorted)

    }

    return (
        <Container>
            <Header>
                <Title>My Teams</Title>
                <Link to="/create">
                    <VscAdd />
                </Link>
            </Header>
            <Tablelist>
                <thead>
                    <tr>
                        <th >
                            <span onClick={() => sortBy("name")}>Name</span>
                            <TiArrowUnsorted />
                        </th>
                        <th >
                            <span onClick={() => sortBy("description")}>Description</span>
                            <TiArrowUnsorted />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {teams && teams.map(team => {

                        return (
                            <tr key={team.id}>
                                <td>{team.name}</td>
                                <td>
                                    {team.description}
                                    <Iconslist>
                                        <button onClick={() => handleDeleteTeam(team.id)}>
                                            <MdDelete />
                                        </button>
                                        <button><IoMdShare /></button>
                                        <button><Link to={`edit/${team.id}`}><MdEdit /></Link></button>
                                    </Iconslist>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </Tablelist>
        </Container>
    )
}

export default Dashboard