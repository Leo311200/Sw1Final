import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { generateSong } from "../../services/apiService";

const CreateSong = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    if (songTitle.trim() === "" || artist.trim() === "") {
      alert("Rellene todos los campos");
      return;
    }

    setIsLoading(true); // Start loading

    try {
      const result = await generateSong(songTitle, artist);
      navigate("/song", { state: { songData: result, songTitle, artist } });
    } catch (error) {
      console.error("Error generating song:", error);
    } finally {
      setIsLoading(false); // Stop loading
    }
  };

  return (
    <>

      <Navbar />
      <div className="login-card">
        <h2 className="login-title">Buscar Canción</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Cancion"
            type="text"
            className="login-input"
            value={songTitle}
            onChange={(e) => setSongTitle(e.target.value)}
          />
          <br />
          <input
            placeholder="Artista"
            type="text"
            className="login-input"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
          <div className="login-buttons" style={{ textAlign: 'center' }}>
            <button type="submit" className="btn btn-login" style={{ color: 'white', border: '1px solid #fff' }} disabled={isLoading}>
              {isLoading ? "Cargando..." : "Buscar"}
            </button>
          </div>
        </form>
      </div>
      <Particle />
    </>
  );
};

export default CreateSong;


