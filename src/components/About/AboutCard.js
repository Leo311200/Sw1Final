import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Nuesta <span className="purple">Comunidad VIP </span>
            tiene la  <span className="purple"> Gran Ventaja</span>
            <br /> de participar en nuestras pruebas Beta de las nuevas funcionalidades
            que se van a implementar en la plataforma en el pasar de tiempo.
            <br />
            No lo pienses mas, <span className="purple">Unete Ahora!</span>
            <br />
            <br />
            Aprovecha nuestro precio de <span className="purple">Lanzamiento</span>!
            Algunas de nuestras ventajas son:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Guias implementado con IA
            </li>
            <li className="about-activity">
              <ImPointRight /> Gestion de Canciones
            </li>
            <li className="about-activity">
              <ImPointRight /> Manejo de acordes (proximamente)
            </li>
          </ul>

        
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
