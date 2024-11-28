import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import avatar from "../../Assets/avatar.png";
import { login } from "../../services/apiService";
import Particle from "../Particle";


const Login = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  /*  */
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

  /*  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);
      localStorage.setItem('nombre', data.nombre);
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred. Please try again later.');
    }
  };
  /*  */
  return (
    <>
      
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          {/*  <Navbar.Brand href="/" className="d-flex">
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
        <h2 className="login-title">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type=""
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

          <div className="login-buttons-container" style={{ color: 'white' }}>
            <button type="submit" className="btn btn-login" style={{ color: 'white', border: '1px solid #fff' }}>
              Login
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



export default Login;
