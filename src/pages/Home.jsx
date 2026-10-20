import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import HeroCarousel from '../components/organisms/HeroCarousel';
import { useProducts } from '../context/ProductsContext';



export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Container className="my-5">
        <Row className="align-items-center g-4">
          <Col md={6}>
            <h2 className="mb-3">¿Quiénes somos?</h2>
            <p>
              Bongo Club es el lugar donde la noche se vive en vivo. Reunimos
              música, stand up comedy y buenos tragos en un ambiente cercano,
              pensado para pasarlo bien con amigos.
            </p>
            <p>
              Cada semana subimos al escenario a artistas y comediantes locales,
              mientras nuestra barra prepara clásicos y creaciones de la casa.
              Ven, pide tu trago favorito y disfruta del show.
            </p>
            <Link to="/carta" className="btn btn-warning">
              Ver carta
            </Link>
          </Col>
          <Col md={6}>
            <img
              src="/images/bongo-club.jpg"
              alt="Ambiente del Bongo Club"
              className="home__about-img"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
