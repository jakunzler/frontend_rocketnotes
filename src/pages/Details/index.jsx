import { Container, Links, Content } from './styles';

import { Header } from '../../components/Header';

import { Section } from '../../components/Section';

import { ButtonText } from '../../components/ButtonText';

import { Button } from '../../components/Button';

import { Tag } from '../../components/Tag';

export function Details() {

    return (
        <Container>
            <Header />

            <main>
                <Content>
                    
                <ButtonText title="Excluir nota" />

                <h1>
                    Introdução ao React
                </h1>

                <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum repellendus repudiandae iure doloremque? Ea neque voluptatum suscipit adipisci earum quas hic eaque, facere culpa exercitationem, sit voluptatibus officia veritatis alias?
                </p>

                <Section title="Links úteis">
                    <Links>
                        <li><a href="#">Item 01</a></li>
                        <li><a href="#">Item 02</a></li>
                        <li><a href="#">Item 03</a></li>
                    </Links>
                </Section>

                <Section title="Marcadores">
                    <Tag title="express" />
                    <Tag title="nodejs" />
                </Section>

                <Button title="Voltar" />
                    
                </Content>
            </main>

        </Container>
    )
}