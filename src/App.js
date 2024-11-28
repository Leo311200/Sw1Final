import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Login from "./components/User/Login";
import Home from "./components/Home/Home";
import HomeI from "./components/Home_Into/HomeI";
import AboutA from "./components/About/About";
import Afinador from "./components/Projects/Afinador";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume/ResumeNew";
import Register from "./components/User/Register";
import Song from "./components/Projects/ViewSong";
import Metronome from "./components/Projects/Metronome";
import Create from "./components/Projects/CreateSong";
import IA from "./components/Projects/IA";
import View from "./components/User/View";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>

        <ScrollToTop />
        <Routes>
         {/*  <Route path="/view" element={<View />} />
          <Route path="/nosotros" element={<AboutA />} />
          <Route path="/about2" element={<PaymentButton />} />
          <Route path="/resume" element={<Resume />} /> */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomeI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* RUTAS PROTEGIDAS */}
          <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
          <Route path="/afinador" element={<PrivateRoute><Afinador /></PrivateRoute>} />
          <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
          <Route path="/song" element={<PrivateRoute><Song /></PrivateRoute>} />
          <Route path="/metronome" element={<PrivateRoute><Metronome /></PrivateRoute>} />
          <Route path="/ia" element={<PrivateRoute><IA /></PrivateRoute>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
