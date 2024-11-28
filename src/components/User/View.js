import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import View2 from "./View2";
import laptopImg from "../../Assets/user.jpg";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
function View() {
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
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
               <strong className="purple">Mi Perfil</strong>
            </h1>
            <View2/>
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
       
      </Container>
    </Container>
    </>
  );
}

export default View;
