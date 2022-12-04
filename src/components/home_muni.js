import Container from 'react-bootstrap/Container';
import { AiOutlineInfoCircle } from "react-icons/ai";


const HomeMuni = () => {
    return(
        <Container id = "ppal">
            <h1 > <AiOutlineInfoCircle />Bandeja de Entrada</h1>
            <Container>
            <p> 3 Denuncias Nuevas</p>
            <p> 1 Denuncias sin abrir</p>
            <p> 4 Denuncias en proceso</p>
            </Container>
        </Container>

    )
}

export default HomeMuni