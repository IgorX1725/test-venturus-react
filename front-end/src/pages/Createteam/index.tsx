import React, { useState, useRef } from 'react'
import { RiCloseFill } from 'react-icons/ri'
import {useHistory} from 'react-router-dom'
import * as Yup from 'yup';
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

interface createTeamFormData {
    name: string;
    description: string;
    website: string;
    type: string;
    tags: string[];
  }

const Createteam: React.FC = () => {
    const [tags, setTags] = useState<string[]>([])
    const [inputText, setInputText] = useState<string>('')
    const formRef = useRef<FormHandles>(null);
    const history = useHistory()
   

    const handdleChange = (text: string) => { 
            setInputText(text)
    }
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const trimedText = inputText.trim()
            if(trimedText){
                const tagList = inputText.split(' ')
                setTags([...tags, ...tagList])
            }
            setInputText('')
        }
    }

    const handleDelete = (index:number)=>{
        const spliceTags = [...tags];
        spliceTags.splice(index,1)
        setTags(spliceTags)
    }

    const handleSubmit = async (data:createTeamFormData)=> {
        data["tags"] = tags
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
              name: Yup.string().required("Name is Required"),
              description: Yup.string().required("Description is Required"),
              type: Yup.string().required("type is Required"),
              website: Yup.string().required("website is Required"),
              tags: Yup.string().required("tags is Required"),
            });
    
            await schema.validate(data, { abortEarly: false });
            await api.post('/teams',{...data})
            history.push("/")
          } catch (err) {
            if (err instanceof Yup.ValidationError) {
              console.log(err);
              return;
            }
        }
      }
    return (
        <Container>
            <Title>
                Create a Team
           </Title>
            <Formsection>TEAM INFORMATION</Formsection>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <Inputcontent>
                    <label>Team Name</label>
                    <Input name="name" type="text" placeholder="Insert team name" />
                </Inputcontent>
                <Inputcontent>
                    <label>Team website</label>
                    <Input name="website" type="url" placeholder="http://myteam.com" />
                </Inputcontent>
                <Inputcontent>
                    <label> Description</label>
                    <Input name="description" placeholder="Insert your description here" />
                </Inputcontent>
                <div>
                    <Inputcontent>
                        <label>Team Time</label>
                        <RadioContainer>
                           <Radio name="type" values={["real","fantasy"]}/>
                        </RadioContainer>
                    </Inputcontent>
                    <Inputcontent>
                        <label>Tags</label>
                        <TagArea>
                            {
                                tags && tags.map((tag, index) =>{
                                    return <Tag key={index}>{tag}<RiCloseFill onClick={()=>handleDelete(index)} /></Tag>
                                })
                            }
                            <input
                                value={inputText}
                                onChange={(e) => handdleChange(e.target.value)}
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

export default Createteam