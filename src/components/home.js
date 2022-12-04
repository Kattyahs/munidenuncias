import { Container,ListGroup } from "react-bootstrap"
import { AiOutlineInfoCircle } from "react-icons/ai";
const Home = () => {
    return(
        <Container id = "ppal">
            <h1> <AiOutlineInfoCircle />Anuncios</h1>
            <Container>
                <ListGroup as="ol"  >
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                 <div className="ms-2 me-auto">
                    <div className="fw-bold" >Ya recibimos denuncias sobre el semáforo apagado en calle Valparaíso 243</div>
                    08:27 am, 8 noviembre 2022
                </div>
                </ListGroup.Item>
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                >
                <div className="ms-2 me-auto">
                <div className="fw-bold">Ha terminado la pavimentación en la calle Arlegui 213</div>
                10:30 am, 2 noviembre 2022
                </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Denuncian luz quemada del poste en calle Viana con Ecuador, transite con precaución.</div>
          19:05pm, 19 octubre 2022
        </div>
      </ListGroup.Item>
    </ListGroup>
            </Container>
        </Container>

    )
}
export default Home
