import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';



// npm install react-popup.


const Anuncio = () => {
    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        else{
            setValidated(true);
            setShow(true);
        }
        setValidated(true);
        
      };
        if (show) {
        return (
        <Container id='ppal'>
        <h1>Realizar Anuncio</h1>
        <Alert variant="light" >
        <p>Su anuncio se ha publicado correctamente </p>
        <Button href="/muni/anuncio" variant="secondary" onClick={() => setValidated(true)} >
            Volver
        </Button>
        </Alert>
        </Container>
        );
        }
        return (
            <Container id='ppal'>
                <h1>Realizar Anuncio</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Control hasValidation as="textarea" rows={4} placeholder="Escriba aquí"  required/>
                        <Form.Control.Feedback type="invalid">
                            Escriba algo válido
                        </Form.Control.Feedback>
                <br/>
                <Button type='submit' variant="primary" >Hacer Anuncio</Button>                
        </Form>


        </Container>
        );
    
}
export default Anuncio
