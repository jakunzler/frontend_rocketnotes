import { useState } from 'react';

import { Header } from '../../components/Header';

import { Container, Form } from './styles';

import { Link } from 'react-router-dom';

import { Input} from '../../components/Input';

import { Button} from '../../components/Button';

import { TextArea } from '../../components/TextArea';

import { NoteItem } from '../../components/NoteItem';

import { Section } from '../../components/Section';

import { api } from '../../services/api';

import { useNavigate } from 'react-router-dom';

export function New() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState('');

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState('');

    const navigate = useNavigate();

    function handleAddLink() {
        setLinks( prevState => [...prevState, newLink]);
        setNewLink('');
    }

    function handleRemoveLink(deletedLink) {
        setLinks(prevState => prevState.filter(item => item !== deletedLink));
    };

    function handleAddTag() {
        setTags( prevState => [...prevState, newTag]);
        setNewTag('');
    }

    function handleRemoveTag(deletedTag) {
        setTags(prevState => prevState.filter(item => item !== deletedTag));
    };

    async function handleNewNote() {
        if(!title) {
            return alert('Title is required!')
        }

        if(newLink) {
            return alert('There is a link that has not been added!')
        }

        if(newTag) {
            return alert('There is a tag that has not been added!')
        }

        await api.post('/notes', {
            title,
            description,
            links,
            tags
        });

        alert('New note added!');
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to="/">voltar</Link>
                    </header>

                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}

                        />

                    <TextArea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                        />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                key={String(index)}
                                value={link}
                                onClick={() => handleRemoveLink(link)}
                            />
                            ))
                        }
                        <NoteItem 
                        isNew 
                        placeholder="Novo link"
                        value={newLink}
                        onChange={e => setNewLink(e.target.value)}
                        onClick={handleAddLink}
                    />
                    </Section>

                    <Section title="Marcadores">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => handleRemoveTag(tag)}
                                />
                                ))
                            }

                            <NoteItem 
                            isNew 
                            placeholder="nodejs" 
                            onChange={e => setNewTag(e.target.value)}
                            value={newTag}
                            onClick={handleAddTag}
                        />
                        </div>

                    </Section>

                    <Button 
                        title="Salvar" 
                        onClick={ handleNewNote }
                    />

                </Form>
            </main>
        </Container>
    );
};