import React, { useState } from "react";
import { Container, Row, Col,Modal, Button ,Form , Image} from "react-bootstrap";
import Particle from "../Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcVisa, faPaypal } from "@fortawesome/free-brands-svg-icons";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

const PaymentButton = () => {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: "",
    name: "",
    expiry: "",
    cvc: "",
  });

  const handleIconClick1 = () => {
    console.log('Icono clickeado');
    setShowModal1(true);
  };
  const handleIconClick2 = () => {
    console.log('Icono clickeado');
    setShowModal2(true);
  };
  const handleIconClick3 = () => {
    console.log('Icono clickeado');
    setShowModal3(true);
  };
  const handleCloseModal1 = () => {
    setShowModal1(false);
  };
  const handleCloseModal2 = () => {
    setShowModal2(false);
  };
  const handleCloseModal3 = () => {
    setShowModal3(false);
  };
  const handleCardDetailsChange = (field, value) => {
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };
  const onHide = () => {
    console.log('Procesando Pago');

    handleCloseModal1();
  }
  const onHide2 = () => {
    console.log('Procesando Pago');

    handleCloseModal2();
  }
  const onHide3 = () => {
    console.log('Procesando Pago');

    handleCloseModal3();
  }

  return (
    <Container fluid className="about-section">
      {/*<Particle/>*/}
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

            <h2>Metodos de Pago</h2>
            
            <div className="payment-icons">
              <FontAwesomeIcon icon={faCcVisa} size="3x" className="visa-icon" onClick={handleIconClick1} />
              <FontAwesomeIcon icon={faPaypal} size="3x" className="paypal-icon" onClick={handleIconClick2}/>
              <FontAwesomeIcon icon={faQrcode} size="3x" className="qr-icon" onClick={handleIconClick3}/>
            </div>
            <Modal show={showModal1} onHide={handleCloseModal1}>
              <Modal.Header closeButton>
                <Modal.Title>Detalles del Pago Por Tarjeta Visa</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                 <Cards
                  number={cardDetails.number}
                  name={cardDetails.name}
                  expiry={cardDetails.expiry}
                  cvc={cardDetails.cvc}
                  focused="number"
                />
              <Form>
              <Form.Group controlId="formCardNumber">
                    <Form.Label>Número de tarjeta</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Ingrese el número de tarjeta"
                      onChange={(e) =>
                        handleCardDetailsChange("number", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formCardName">
                    <Form.Label>Nombre Propietario</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nombre del propietario"
                      onChange={(e) =>
                        handleCardDetailsChange("name", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formExpirationDate">
                    <Form.Label>Fecha de vencimiento</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="MM/YY"
                      onChange={(e) =>
                        handleCardDetailsChange("expiry", e.target.value)
                      }
                    />
                  </Form.Group>
                  <Form.Group controlId="formCVC">
                    <Form.Label>CVC</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="CVC"
                      onChange={(e) =>
                        handleCardDetailsChange("cvc", e.target.value)
                      }
                    />
                  </Form.Group>                 
              </Form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={onHide}>
                Pagar
              </Button>
                <Button variant="secondary" onClick={handleCloseModal1}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>


            <Modal show={showModal2} onHide={handleCloseModal2}>
              <Modal.Header closeButton>
                <Modal.Title>Detalles del Pago PayPal</Modal.Title>
              </Modal.Header>
              <Modal.Body>
              <Form>
                  <Form.Group controlId="formCardNumber">
                    <Form.Label>Codigo de Venta</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el codigo"
                    />
                  </Form.Group>
                  <Form.Group controlId="formCardTarget">
                    <Form.Label>Codigo Tarjeta</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el codigo"
                    />
                  </Form.Group>
                  <Form.Group controlId="formCardPass">
                    <Form.Label>Contraseña Usuario</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese la contraseña"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={onHide2}>
                Pagar
              </Button>
                <Button variant="secondary" onClick={handleCloseModal2}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
            <Modal show={showModal3} onHide={handleCloseModal3}>
              <Modal.Header closeButton>
                <Modal.Title>Detalles del Pago QR</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group controlId="formCardQr">
                    <Form.Label>Imagen QR</Form.Label>
                      <Image
                        src=""
                        alt="Imagen QR"
                        fluid
                      />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
              <Button variant="primary" onClick={onHide3}>
                Pagar
              </Button>
                <Button variant="secondary" onClick={handleCloseModal3}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default PaymentButton;