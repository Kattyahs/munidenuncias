import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import NavDropdown from 'react-bootstrap/NavDropdown';
import { CgProfile } from "react-icons/cg";



const NavBarMuni = () => {
  const navDropdownTitle = (<CgProfile />);

    return(
       <>    
       <Navbar className="navBg" variant="light" expand="lg" align="left" sticky="top">
        <Container>
          {/*Logo*/}
        <Navbar.Brand href="/muni">
            <img
              src="/muni_denuncia_logo.png"
              width="220"
              height="65"
              className="d-inline-block align-top"
              alt="Muni Denuncias logo"
            />      
          </Navbar.Brand>
            <Navbar.Brand as={Link} to="/muni" ></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            {/*Inicio*/}
            <Nav.Link as={Link} to="/muni" activeClassName="link-active" id="nav" >Inicio</Nav.Link>

            {/*Ver denuncias*/}
            <NavDropdown title="Ver denuncias" id="basic-nav-dropdown">
              <NavDropdown.Item to='denuncia/Revision' as={Link}>Sin revisión</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to='denuncia/Proceso' as={Link}>En proceso</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item to='denuncia/Terminada' as={Link}>Terrminadas</NavDropdown.Item>
            </NavDropdown>

            {/*Hacer anuncio*/}
            <Nav.Link as={Link} to="anuncio" activeClassName="active" id="nav" >Hacer anuncio</Nav.Link>                
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>


            {/*Perfil*/}
            <NavDropdown id="perfil" title={navDropdownTitle} align="end">
              <NavDropdown.Item href="/muni">Ver perfil</NavDropdown.Item>
              <NavDropdown.Item href="/muni">Editar perfil</NavDropdown.Item>
              <NavDropdown.Item href="/muni">Preferencias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/muni">
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
export default NavBarMuni