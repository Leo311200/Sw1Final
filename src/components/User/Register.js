import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import logo from "../../Assets/logo.png";
import avatar from "../../Assets/avatar.png";
import { register } from "../../services/apiService";
import Particle from "../Particle";


const Register = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  /*  */
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  /*  */

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const ci = "ninguno";
      const direccion = "ninguno";
      const telefono = "ninguno";
      const foto = "ninguno";

      const data = await register(nombre, apellido, ci, direccion, telefono, email, password, foto);
      localStorage.setItem('token', data.token);
      localStorage.setItem('nombre', data.nombre);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };


  return (
    <>
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

        </Container>
      </Navbar>

      <div className="login-card">
        <div className="login-logo">
          <img src={avatar} className="login-logo" alt="brand" />
        </div>
        <h2 className="login-title">Registro</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre"
            className="login-input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <br />

          <input
            type="text"
            placeholder="Apellido"
            className="login-input"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="login-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Contraseña"
            className="login-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <div className="login-buttons" style={{ color: 'white' }}>
            <button type="submit" className="btn btn-login" style={{ color: 'white', border: '1px solid #fff' }}>
              Registrarse
            </button>
            <Link to="/" className="btn btn-register" style={{ color: 'white', border: '1px solid #fff' }}>
              Cancelar
            </Link>
          </div>
        </form>
      </div>
      <Particle />
    </>
  );
};



export default Register;
