import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Navbar from "../Navbar";

function Afinador() {
  useEffect(() => {
    // Manejar el mensaje enviado desde la ventana embebida
    const handleMessage = (event) => {
      // Aquí puedes procesar el mensaje recibido
      console.log("Mensaje recibido desde la ventana embebida:", event.data);
    };

    // Agregar un event listener para escuchar mensajes
    window.addEventListener("message", handleMessage);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);
  return (
    <>
      <Navbar />
      <Container fluid className="about-section">
        <Container>
          <Row style={{ justifyContent: "center", padding: "10px" }}>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              {/* <h2>Afinador Guitarras</h2> */}
              <iframe
                src="/tuner-master/app/index.html"
                title="Vista Embebida"
                width="600"
                height="500"
                className="fondo-iframe"
                sandbox="allow-same-origin allow-scripts"
              ></iframe>
              
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </>
  );
}

export default Afinador;