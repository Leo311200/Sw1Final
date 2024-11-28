import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { Link } from "react-router-dom";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Navbar from "../Navbar";

function Projects() {
  return (
    <>
      <Navbar />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            Catalogo de <strong className="purple">Canciones </strong>
          </h1>
          <p style={{ color: "white" }}>
            Aqui veras las ultimas canciones subidas a nuestra comunidad.
          </p>
          <div className="song-card">
            <div className="login-buttons" style={{ color: 'white' }}>
            </div>
            <Link to="/create" className="btn btn-login" style={{ color: 'white', border: '1px solid #fff', }}>
              Registra tu cancion preferia aqui!
            </Link>

          </div>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatify}
                isBlog={false}
                title="Nombre Cancion"
                description="algo"
                genero="algo"

                demoLink="https://chatify-49.web.app/"
              />
            </Col>


          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
