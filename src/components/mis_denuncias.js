import { Container, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';

const DenunciasVecino = (props) =>{
    const columns = [{
        dataField: 'num',
        text: '# Denuncias',
        sort : true,

      }, {
        dataField: 'estado',
        text: 'Estado',
        sort: true
      }, {
        dataField: 'fecha',
        text: 'Fecha',
        sort : true
      },{
        dataField: 'sector',
        text: 'Sector',
        sort : true
      }];
    const expandRow = {
        renderer: row => (
            <div>
                <p>Descripción: {row.descripcion}</p>
                <p>Direccion: {row.direccion}</p>
            </div>
        ),
        showExpandColumn: true,
        expandColumnPosition: 'right'
        
    };
    const rowStyle = (row, rowIndex) => {
        if(row.estado === 'Sin Revisar'){
            return { backgroundColor: '#FFAB91' }
        }
        else if (row.estado === 'En Proceso'){
            return { backgroundColor: '#FFF9C4'}
        }
        else{
            return {backgroundColor: '#C8E6C9'}
        }
      };

    const headerStyle = (row, rowIndex) => {
        return { backgroundColor: 'blue'}
      };
      
        
    const defaultSorted = [{
        dataField: 'num',
        order: 'desc'
      }];


    
    return(
        <Container id = "ppal">
            <h1> Mis denuncias</h1>
        
            <Row style={{backgroundColor: 'white', marginTop: '10px', borderRadius: '2%',marginRight:"5px"}}>
                <div className= 'p-3'>
                <BootstrapTable bordered hover responsive 
                    keyField='num'
                    data={ props.misdenuncias }
                    columns={columns}
                    expandRow={ expandRow }
                    defaultSorted = { defaultSorted }
                    rowStyle= { rowStyle }
                    headerStyle= { headerStyle }
                    
                />
                </div>
            </Row>
        </Container>
    )
}

export default DenunciasVecino
