import { useState, useEffect } from "react";

import { FiPlus } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";

import { ButtonText } from "../../components/ButtonText";

import { Input } from "../../components/Input";

import { Note } from "../../components/Note";

import { Section } from "../../components/Section";

import { api } from "../../services/api";

export function Home() {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get('http://localhost:3000/tags');
            const data = await response.json();

            setTags(data);
        }

        fetchTags();
    }, []);

    return(
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header>

            </Header>

            <Menu>
                <li>
                    <ButtonText 
                    title="Todos"
                    isActive
                />
                </li>

                {
                    tags && tags.map(tag => (
                        <li>
                            <ButtonText
                            key={String(tag.id)}
                            title={tag.name} 
                        />
                        </li>
                    ))
                }
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo título"/>
            </Search>

            <Content>
                <Section title="Notas Recentes" >
                    <Note data={{
                        title: "React",
                        tags: [
                            {id: '1', name: 'react'},
                            {id: '2', name: 'rocketseat'},
                        ]
                    }}
                    />
                </ Section>
            </Content>

            <NewNote to="/new">
                <FiPlus />
                Criar Nota

            </NewNote>
        </Container>
    )
};