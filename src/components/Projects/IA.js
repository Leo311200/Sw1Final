import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Navbar from "../Navbar";
import HandDetection from "../Projects/HandDetection";

function IA() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Navbar />

      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <HandDetection />
        </Container>
      </Container>
    </>
  );
}

export default IA;
