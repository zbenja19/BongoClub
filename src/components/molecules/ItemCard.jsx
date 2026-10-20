import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import  '../../styles/molecules/ItemCard.css';


export default function ItemCard({ imagen, titulo, descripcion, etiqueta, textoBoton, onClick }) {
  return (
    <Card className="h-100">
      <Card.Img variant="top" src={imagen} alt={titulo} className="itemcard__img" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>
          {titulo} {etiqueta && <Badge bg="warning" text="dark">{etiqueta}</Badge>}
        </Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        {textoBoton && (
          <Button variant="primary" className="mt-auto" onClick={onClick}>
            {textoBoton}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}