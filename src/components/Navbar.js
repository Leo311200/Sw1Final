import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { CgGitFork, CgUser } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineOrderedList,
  AiFillAudio,
  AiFillDollarCircle,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  /*  */
  const navigate = useNavigate(); // Hook de navegación para redirigir al usuario
  /*  */

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  /*  */
  // Función de logout
  const handleLogout = () => {
    localStorage.clear(); //borrar todos los datos del local storage
    navigate("/"); // Redirige al usuario a la página de login
  };
  /*  */


  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        {/* <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand> */}
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/home" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/create"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineOrderedList style={{ marginBottom: "2px" }} /> Canciones
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/afinador"
                onClick={() => updateExpanded(false)}
              >
                <AiFillAudio style={{ marginBottom: "2px" }} /> Afinador
              </Nav.Link>
            </Nav.Item>

            {/* <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiFillAudio style={{ marginBottom: "2px" }} /> Cursos
              </Nav.Link>
            </Nav.Item>
 */}
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/ia"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> IA
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/metronome"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Metronomo
              </Nav.Link>
            </Nav.Item>

            {/* Botón de logout */}
            <Nav.Item className="fork-btn">
              <Button
                onClick={handleLogout}
                className="fork-btn-inner"
              >
                <CgUser style={{ fontSize: "1.2em" }} /> Logout
              </Button>
            </Nav.Item>

            {/* <Nav.Item className="fork-btn">
              <Button
                href=""
                target="_blank"
                className="fork-btn-inner"
              >

                <CgUser style={{ fontSize: "1.2em" }} />{" "}

              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



}

export default NavBar;
