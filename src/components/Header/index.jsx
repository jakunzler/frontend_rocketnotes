import { RiShutDownLine} from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header() {
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/jakunzler.png" alt="Foto de perfil do usuário" />

                <div>
                    <span>Bem vindo</span>
                    <strong>Jonas Kunzler</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}