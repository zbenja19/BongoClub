import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function NavbarMain() {
  const { user, logout } = useAuth();

  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark" sticky="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">Bongo Club</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarMain" />
        <Navbar.Collapse id="navbarMain">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/artistas">Artistas</Nav.Link>
            <Nav.Link as={NavLink} to="/carta">Carta</Nav.Link>
          </Nav>

          <Nav className="align-items-lg-center">
            {user ? (
              <>
                <Navbar.Text className="me-3">{user.name}</Navbar.Text>
                <Nav.Link onClick={logout}>Cerrar sesión</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Iniciar sesión</Nav.Link>
                <Nav.Link as={Link} to="/register">Registrar</Nav.Link>
              </>
            )}
            <Button as={Link} to="/reservas" variant="warning" className="ms-lg-2">
              Reservar
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}