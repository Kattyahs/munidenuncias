import './denuncias.css'
import Table from 'react-bootstrap/Table'
import {useNavigate, useParams} from 'react-router-dom';
import { useCallback} from 'react'
import { Container, Row } from 'react-bootstrap';


const DeunciasMuni = (props) =>{   
    const navigate = useNavigate();

    const detalles = useCallback((num) => {
       return navigate("/muni/denuncia/" + param.estado +"/"+num)
    })
    const param = useParams()
    const buttonStyle = (estado) => {
        if(estado === "Revision"){
            return '#FFAB91' 
        }
        else if (estado === "Proceso"){
            return  '#FFF9C4'
        }
        else{
            return  '#C8E6C9'
        }
        
      };

    const getEstado = (param) => {
        if(param.estado === "Terminada"){
            return "Terminada"
        }
        else if(param.estado === "Revision"){
            return "Sin Revisar"
        }
        else if(param.estado === "Proceso"){
            return "En Proceso"
        }
    }
    //getEstado(param);
    return(
        <Container id= "ppal">
            <h1><span style={{backgroundColor: buttonStyle(param.estado)}}>Denuncias {getEstado(param)}</span></h1>
            <Row style={{backgroundColor: 'white',  borderRadius: '5px',  marginRight: '5px', marginLeft: '5px'}}>
                <div  className= 'p-3' >
                <Table className= 'mb-0' bordered hover responsive variant= 'Light'>
                        <thead>
                            <tr>
                            <th># Denuncia</th>
                            <th>Problematica</th>
                            <th>Sector</th>
                            <th>Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.denuncias.filter(denuncias => denuncias.tipo === getEstado(param)).map((denuncias,indice)=>
                                <tr onClick={()=>{detalles(denuncias.num)}}>
                                    <td>{denuncias.num}</td>
                                    <td>{denuncias.problematica}</td>
                                    <td>{denuncias.sector}</td>
                                    <td>{denuncias.fecha}</td>
                                </tr>
                            )}
                            
                        </tbody>
                        </Table>
                    </div>
                </Row>
                    
        </Container>
    )
}
export default DeunciasMuni
