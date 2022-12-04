import { useEffect, useState } from "react"
import { Container,Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Dropdown from 'react-bootstrap/Dropdown';
import Modal from 'react-bootstrap/Modal';


const DenunciasDet = (props) =>{
    const param = useParams()
    const [denuncia, setDenuncia] = useState({});
    const [show, setShow] = useState(false);
    const [estado, setEstado] = useState('Sin Revisar')

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect( () =>{
        setDenuncia(props.denuncias.filter( denuncia => denuncia.num.toString() === param.num)[0])
    },[])

    const buttonStyle = (denuncia) => {
        if(denuncia.tipo === 'Sin Revisar'){
            return '#FFAB91' 
        }
        else if (denuncia.tipo === 'En Proceso'){
            return  '#FFF9C4'
        }
        else{
            return  '#C8E6C9'
        }
        
      };
      const downloadTxtFile = () => {
        console.log("download logic goes here")
    }
    const changeState = (estado) =>{
        const temp = [...props.denuncias]
        temp.filter( denuncia => denuncia.num.toString() === param.num)[0].tipo = estado
        props.setDenuncias(temp)
    }
    return(
        <Container  id="ppal" >
            <Modal show={show} onHide={handleClose} >
                <Modal.Header closeButton >
                    <Modal.Title >¿Desea cambiar el estado a <br></br>"{estado}" ?</Modal.Title>
                </Modal.Header>
                    <Modal.Footer>
                <Button variant="secondary" background-color ='#DDD8D8'  onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={() => {handleClose()
                    changeState(estado)}}>
                        Confirmar
                    </Button>
                    </Modal.Footer>

            </Modal>
            <div className="pt-3"> </div>
            <Row style={{marginTop:'0.9rem', display: 'flex', justifyContent:'space-between'}}>
                <Col>
                    <p  style={{textAlign: 'left', marginLeft: '20px'}}> Detalle Denuncia #{param.num}</p>
                </Col>

                <Col >
                    <Row>
                        <Col align= 'right'>
                        <p>Estado:</p>
                        </Col>
                        <Col className="px-2"  align= 'left'>
                            <div >
                                <Dropdown >
                                    <Dropdown.Toggle style={{ height: '2.5rem',color: 'black',backgroundColor: buttonStyle(denuncia), borderColor: buttonStyle(denuncia), borderRadius: '5px'} } id="dropdown-basic">
                                        {denuncia.tipo}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() =>{handleShow() 
                                            setEstado('Sin Revisar')}}>Sin Revisar</Dropdown.Item>
                                        <Dropdown.Item onClick={() =>{handleShow() 
                                            setEstado('En Proceso')}}>En Proceso</Dropdown.Item>
                                        <Dropdown.Item onClick={() =>{handleShow() 
                                            setEstado('Terminada')}}>Terminada</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                            </div>
                            
                        </Col>
                        
                    </Row>
                </Col>
            </Row>
            <Container> 
            <Row>
                <Container id= "detalle">
                <Col align = 'right'>
                <p># Denuncia: </p>
                <p > Problematica:</p>
                <p > Sector:</p>
                <p > Direccion:</p>
                <p > Fecha:</p>
                <p > Hora:</p>
                <p > Imagen Adjunta:</p>
                </Col>
                </Container >
                <Container>
                <Col align = 'left'> 
                <p>{param.num} </p>
                <p >{denuncia.problematica}</p>
                <p >{denuncia.sector}</p>
                <p>{denuncia.direccion}</p>
                <p >{denuncia.fecha}</p>
                <p > {denuncia.hora}</p>
                <p><button id="downloadBtn" onClick={downloadTxtFile} value="download">Descargar archivo</button>
                </p>
                </Col>
                </Container>
            </Row>
            </Container>   

        </Container>
         

        
    )
}

export default DenunciasDet
