import React, { useState, useRef, useEffect } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import { useHistory, useParams } from 'react-router-dom'
import {
    Container,
    Title,
    Inputcontent,
    Formsection,
    RadioContainer,
    TagArea,
    Tag,
    Save
} from './styles'
import { FormHandles } from "@unform/core";
import { Form } from '@unform/web';
import Input from '../../components/Input'
import api from '../../services/api'
import Radio from '../../components/radio'
import * as Yup from 'yup'

interface TeamState {
    id: string;
    name: string;
    description: string;
    website: string;
    type: 'real' | 'fantasy';
    tags: string[];
}

const Editteam: React.FC<TeamState> = () => {

    const [team, setTeam] = useState<TeamState>({} as TeamState)
    const [inputText, setInputText] = useState<string>('')
    const formRef = useRef<FormHandles>(null);
    const history = useHistory()
    const { id } = useParams();

    useEffect(() => {
        api.get(`/teams/${id}`).then(response => {
            setTeam(response.data)
        })
    }, [id])

    const handleNameChange = (text: string) => {
        setTeam({...team, name:text})
    }

    const handleDescriptionChange = (text: string) => {
        setTeam({...team, description:text})
    }
    const handleWebsiteChange = (text: string) => {
        setTeam({...team, website:text})
    }

    const handleTagChange = (text: string) => {
        setInputText(text)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const trimedText = inputText.trim()
            if (trimedText) {
                const tagList = inputText.split(' ')
                const allTags = [...team.tags, ...tagList]
                setTeam({...team, tags:allTags})
            }
            setInputText('')
        }
    }

    const handleDelete = (index: number) => {
        const spliceTags = [...team.tags];
        spliceTags.splice(index, 1)
        setTeam({...team, tags:[...spliceTags]})
    }

    const handleSubmit = async (data: TeamState) => {
        data["tags"] = team.tags
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                name: Yup.string().required("Name is Required"),
                description: Yup.string().required("Description is Required"),
                type: Yup.string().required("type is Required"),
                website: Yup.string().required("website is Required"),
                tags: Yup.array().required("tags is Required"),
            });

            await schema.validate(data, { abortEarly: false });
            await api.put(`/teams/${id}`, { ...data })
            history.push("/")
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                console.log(err)
                return;
            }
        }
    }
    return (
        <Container>
            <Title>
                Edit a Team
           </Title>
            <Formsection>TEAM INFORMATION</Formsection>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Inputcontent>
                    <label>Team Name</label>
                    <Input name="name" onChange={(e)=>handleNameChange(e.target.value)} type="text" placeholder="Insert team name" value={team.name || ''} />
                </Inputcontent>
                <Inputcontent>
                    <label>Team website</label>
                    <Input name="website" onChange={(e)=>handleWebsiteChange(e.target.value)} type="url" placeholder="http://myteam.com" value={team.website || ''} />
                </Inputcontent>
                <Inputcontent>
                    <label> Description</label>
                    <Input name="description" onChange={(e)=>handleDescriptionChange(e.target.value)} placeholder="Insert your description here" value={team.description || ''} />
                </Inputcontent>
                <div>
                    <Inputcontent>
                        <label>Team Time</label>
                        <RadioContainer>
                            <Radio name="type" values={["real", "fantasy"]} />
                        </RadioContainer>
                    </Inputcontent>
                    <Inputcontent>
                        <label>Tags</label>
                        <TagArea>
                            {
                                team.tags && team.tags.map((tag, index) => {
                                    return <Tag key={index}>{tag}<RiCloseFill onClick={() => handleDelete(index)} /></Tag>
                                })
                            }
                            <input
                                value={inputText || ''}
                                onChange={(e)=>handleTagChange(e.target.value)}
                                onKeyDown={(e) => handleKeyPress(e)}
                                type="text"
                                placeholder="Insert Tags Here"
                            />
                        </TagArea>
                    </Inputcontent>
                </div>
                <Save type="submit">Salvar</Save>
            </Form>
        </Container>
    )
}

export default Editteam