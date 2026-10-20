import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ItemCard from '../components/molecules/ItemCard';
import { useProducts } from '../context/ProductsContext';

export default function Carta() {
  const { products } = useProducts();

  return (
    <Container className="py-4">
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.map((p) => (
          <Col key={p.id}>
            <ItemCard {...p} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}