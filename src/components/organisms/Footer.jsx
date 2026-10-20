import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="gy-3">
          <Col md={4}>
            <h5>Bongo Club</h5>
            <p className="mb-0">Música en vivo, tragos y stand up comedy.</p>
          </Col>
          <Col md={4}>
            <h6>Horarios</h6>
            <p className="mb-0">Jue a Sáb: 20:00 - 03:00</p>
          </Col>
          <Col md={4}>
            <h6>Contacto</h6>
            <p className="mb-0">Dirección · Teléfono · Instagram</p>
          </Col>
        </Row>
        <hr />
        <small>© 2026 Bongo Club</small>
      </Container>
    </footer>
  );
}