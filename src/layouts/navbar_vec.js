import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { CgProfile } from "react-icons/cg";
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

const navDropdownTitle = (<CgProfile />);
const NavBarExample = () => {
  const imagen = '/muni_denuncia_logo.png'
    return( 
      <> 
       <Navbar className="header" variant="light" expand="lg" align="left" sticky="top" id='contenedornav'>
       <Container id = 'prueba2'>
          <Navbar.Brand href="/vecino"> {/*hacer click en logo lleva a path /vecino*/}
            <img
              src= {imagen}
              width="220"
              height="65"
              className="d-inline-block align-top"
              alt="Muni Denuncias logo"
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/"></Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link id="nav" href="/vecino" >Inicio</Nav.Link>
              <Nav.Link  id="nav" href="/vecino/denunciar" >Denunciar</Nav.Link>
              <Nav.Link id="nav" href="/vecino/mis_denuncias" >Mis Denuncias</Nav.Link>                
            </Nav>
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            
            {/*Perfil*/}
            <NavDropdown id="perfil" title={navDropdownTitle} align="end">
              <NavDropdown.Item href="/vecino">Ver perfil</NavDropdown.Item>
              <NavDropdown.Item href="/vecino">Editar perfil</NavDropdown.Item>
              <NavDropdown.Item href="/vecino">Preferencias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/vecino">
                Cerrar sesión
              </NavDropdown.Item>
            </NavDropdown>
            </Navbar.Collapse>
        </Container>
        </Navbar>  
          <section>
            <Outlet></Outlet>
         </section> 
        </>
    )
}
export default NavBarExample
