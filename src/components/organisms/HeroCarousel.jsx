import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import '../../styles/organisms/HeroCarousel.css';


const shows = [
  {
    imagen: '/images/piareconpe.webp',
    titulo: 'Noche de Stand Up',
    fecha: 'Jueves 12 · 21:30',
    descripcion: 'Los mejores comediantes en un solo escenario.',
    link: '/reservas',
  },
  {
    imagen: '/images/LuisJara.webp',
    titulo: 'Música en vivo',
    fecha: 'Viernes 03 · 21:30',
    descripcion: 'Bandas locales y mucho ritmo toda la noche.',
    link: '/reservas',
  },
  {
    imagen: '/images/DonCarterShow.webp',
    titulo: 'Sábado de Bongo',
    fecha: 'Sábado 24 · 22:30',
    descripcion: 'Show especial con tragos de la casa.',
    link: '/reservas',
  },
];

export default function HeroCarousel() {
  return (
    <Carousel fade interval={6000} pause="hover" className="hero-carousel">
      {shows.map((show) => (
        <Carousel.Item key={show.titulo}>
          <div className="hero-slide">
            <div
              className="hero-slide__bg"
              style={{ backgroundImage: `url(${show.imagen})` }}
            />
            <div className="hero-slide__content">
              <div className="hero-slide__info">
                <p className="hero-slide__fecha">{show.fecha}</p>
                <h2>{show.titulo}</h2>
                <p>{show.descripcion}</p>
                <Button variant="warning" href={show.link}>
                  Reservar
                </Button>
              </div>
              <img
                className="hero-slide__poster"
                src={show.imagen}
                alt={show.titulo}
              />
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}