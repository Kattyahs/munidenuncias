
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Button,Container,Row,Alert} from 'react-bootstrap';

const Denunciar = () => {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
   
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    else{
      setShow(true);
    }
      setValidated(true);
     
  };
  if(show){
    return(
      <Container id="ppal">
        <h1>Realizar Denuncia</h1>
  
        <Alert show={show} variant="success" >
          <p>Su denuncia se ha registrado exitosamente</p>
          <Button href="denunciar" onClick={() => setShow(false) } variant="outline-success">
          Cerrar
          </Button>
      </Alert>
      </Container>
    )
  
   }
    return(
    <Container id = "ppal" >   

    <h1>Realizar Denuncia</h1>
    
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
    <Form.Group align= "right" as={Row} className="mb-3" controlId="formPlaintextProblematica" >
      <Form.Label column sm="2">
      Problemática <span style={{ color: "red" }}>(*)</span> 
      </Form.Label>
      <Col sm="7">
        <Form.Control required type="text" placeholder="Problema. Ej: Corte de luz" />
        <Form.Control.Feedback type="invalid">
            Ingrese el problema
        </Form.Control.Feedback>
      </Col>
      
    </Form.Group>
    <Form.Group align= "right" as={Row} className="mb-3" controlId="formPlaintextSector">
      <Form.Label column sm="2">
        Sector <span style={{ color: "red" }}>(*)</span> 
      </Form.Label>
      <Col sm="7">
        <Form.Control required type="text" placeholder="Sector donde ocurrió. Ej: Miraflores Alto" />
        <Form.Control.Feedback type="invalid">
            Ingrese Sector
          </Form.Control.Feedback>
      </Col>
    </Form.Group>
    <Form.Group align= "right" as={Row} className="mb-3" controlId="text">
      <Form.Label column sm="2">
        Dirección <span style={{ color: "red" }}>(*)</span> 
      </Form.Label>
      <Col sm="7">
        <Form.Control required type="text" placeholder="Dirección donde ocurrió. Ej: Esquina Villanelo con Viana" />
        <Form.Control.Feedback type="invalid">
            Ingrese Dirección
          </Form.Control.Feedback>
      </Col>
    </Form.Group>
    <Form.Group align= "right" as={Row} className="mb-3" controlId="text">
      <Form.Label column sm="2">
        Descripción
      </Form.Label>
      <Col sm="7">
        <Form.Control as="textarea" 
        placeholder="(Opcional) Escriba acá una descripción más amplia si lo necesita" />
      </Col>
    </Form.Group>
    <Form.Group align="right" as={Row} controlId="formFileSm" className="mb-3">
        <Form.Label column sm="2">Adjuntar foto</Form.Label>
        <Col sm="4">
        <Form.Control type="file" size="sm" />
        </Col>
        </Form.Group>
    <p align="right"> <span style={{ color: "red" }}>*</span>  Es obligatorio llenar este campo del formulario</p>
       <Button type="submit" >Enviar denuncia</Button>

    {/*!show && <Button type="submit" onClick={()=> setShow(true)}>
        Enviar Denuncia
    </Button>*/}
  </Form>
  </Container>
  )

}
export default Denunciar;
