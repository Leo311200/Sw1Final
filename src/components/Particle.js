/* import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ position: "absolute", width: "100%", height: "100%", background: "#2ECC71" }} // Cambia el color de fondo a verde
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#FFFFFF", "#FFD700", "#FF8C00", "#FF6347"], // Colores de las notas musicales: blanco, dorado, naranja, rojo claro
          },
          shape: {
            type: "char",
            options: {
              character: [
                { value: "♫", font: "Arial", style: "normal", weight: "400", fill: true, color: "#FFFFFF" }, // Nota musical blanca
                { value: "♪", font: "Arial", style: "normal", weight: "400", fill: true, color: "#FFD700" }, // Nota musical dorada
              ],
              size: 40,
              style: "normal",
              weight: "400",
            },
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          move: {
            direction: "random",
            speed: 1,
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle; */

import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      style={{ position: "absolute", width: "100%", height: "100%", background: "#001f3f" }} // Fondo azul oscuro
      params={{
        particles: {
          number: {
            value: 50,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: ["#00FF00", "#32CD32", "#7CFC00", "#ADFF2F"], // Diferentes tonalidades de verde
          },
          shape: {
            type: "char",
            options: {
              character: [
                { value: "♫", font: "Arial", style: "normal", weight: "400", fill: true, color: "#00FF00" }, // Nota musical verde claro
                { value: "♪", font: "Arial", style: "normal", weight: "400", fill: true, color: "#32CD32" }, // Nota musical verde lima
              ],
              size: 40,
              style: "normal",
              weight: "400",
            },
          },
          opacity: {
            value: 0.8,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
            },
          },
          move: {
            direction: "random",
            speed: 1,
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 4,
              size_min: 10,
              sync: false,
            },
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: false,
              mode: "repulse",
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;



