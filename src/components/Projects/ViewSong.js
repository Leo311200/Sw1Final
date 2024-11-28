import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { useLocation } from "react-router-dom";
import Particle from "../Particle";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const ViewSong = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const location = useLocation();
  const songData = location.state?.songData;

  const title = location.state?.songTitle;
  const artist = location.state?.artist;
  const songText = songData?.songDetails?.song || ""; // Obtener el campo 'song' del songData
  const chords = songData?.songDetails?.chords || ""; // Obtener el campo 'chords' del songData

  const songRef = useRef();
  const hiddenDivRef = useRef();

  // Función para obtener la introducción del texto de la canción
  const getIntroduction = (songText) => {
    // Buscar la introducción en el texto del 'song'
    const introRegex = /^Intro:\s*([A-Za-z\s]+)\n/;
    const match = introRegex.exec(songText);
    if (match) {
      return match[0];
    }
    return "";
  };

  // Función para obtener el resto del texto de la canción excluyendo título, autor e introducción
  const getRemainingSongText = (songText) => {
    // Remover el título, autor e introducción del texto
    const intro = getIntroduction(songText);
    let cleanedText = songText.replace(intro, "").trim();
    cleanedText = cleanedText.replace(/\*\*Title:\s*(.*?)\*\*\s*\n\*\*Author:\s*(.*?)\*\*/, "").trim();
    return cleanedText;
  };

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 20) {
        updateNavbar(true);
      } else {
        updateNavbar(false);
      }
    }

    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez

  const remainingSongText = getRemainingSongText(songText);

  // Función para exportar el contenido a PDF
  const exportToPDF = () => {
    // Copia el contenido del textarea al div oculto
    hiddenDivRef.current.textContent = remainingSongText;

    const input = hiddenDivRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${title}.pdf`);
    });
  };

  return (
    <>
      <Navbar />   
      <div className="login-card" ref={songRef}>
        <h2 className="song-title">{title}</h2>
        <h3 className="song-author">{artist}</h3>
        <h2 className="song-title">{chords}</h2>
        <textarea
          className="song-output"
          value={remainingSongText}
          readOnly
          rows={10} // Ajusta según sea necesario
        />
      </div>
      <div
        ref={hiddenDivRef}
        style={{
          position: "absolute",
          top: "-9999px",
          left: "-9999px",
          whiteSpace: "pre-wrap",
          width: "80%", // Ajusta según sea necesario
        }}
      ></div>
      <button onClick={exportToPDF} className="btn btn-primary mt-3">
        Exportar a PDF
      </button>
      <Particle />
    </>
  );
};

export default ViewSong;

// import React, { useState, useEffect, useRef } from "react";
// import Navbar from "../Navbar";
// import { useLocation } from "react-router-dom";
// import Particle from "../Particle";
// import { jsPDF } from "jspdf";
// import html2canvas from "html2canvas";

// const ViewSong = () => {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);
//   const location = useLocation();
//   const songData = location.state?.songData;

//   const title = location.state?.songTitle;
//   const artist = location.state?.artist;
//   const songText = songData?.songDetails?.song || ""; // Obtener el campo 'song' del songData
//   const chords = songData?.songDetails?.chords || []; // Obtener el campo 'chords' del songData

//   const songRef = useRef();
//   const hiddenDivRef = useRef();

//   // Función para obtener la introducción del texto de la canción
//   const getIntroduction = (songText) => {
//     // Buscar la introducción en el texto del 'song'
//     const introRegex = /^Intro:\s*([A-Za-z\s]+)\n/;
//     const match = introRegex.exec(songText);
//     if (match) {
//       return match[0];
//     }
//     return "";
//   };

//   // Función para obtener el resto del texto de la canción excluyendo título, autor e introducción
//   const getRemainingSongText = (songText) => {
//     // Remover el título, autor e introducción del texto
//     const intro = getIntroduction(songText);
//     let cleanedText = songText.replace(intro, "").trim();
//     cleanedText = cleanedText.replace(/\*\*Title:\s*(.*?)\*\*\s*\n\*\*Author:\s*(.*?)\*\*/, "").trim();
//     return cleanedText;
//   };

//   useEffect(() => {
//     function scrollHandler() {
//       if (window.scrollY >= 20) {
//         updateNavbar(true);
//       } else {
//         updateNavbar(false);
//       }
//     }

//     window.addEventListener("scroll", scrollHandler);
//     return () => {
//       window.removeEventListener("scroll", scrollHandler);
//     };
//   }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez

//   const remainingSongText = getRemainingSongText(songText);

//   // Función para exportar el contenido a PDF
//   const exportToPDF = () => {
//     // Copia el contenido del textarea al div oculto
//     hiddenDivRef.current.textContent = remainingSongText;

//     const input = hiddenDivRef.current;
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       const imgProps = pdf.getImageProperties(imgData);
//       const pdfWidth = pdf.internal.pageSize.getWidth();
//       const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
//       pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
//       pdf.save(`${title}.pdf`);
//     });
//   };

//   const chordTypes = {
//     mayores: ["A", "B", "C", "D", "E", "F", "G"],
//     menores: ["Am", "Bm", "Cm", "Dm", "Em", "Fm", "Gm"],
//     septimas: ["A7", "B7", "C7", "D7", "E7", "F7", "G7"],
//     septimas_mayores: ["AM7", "BM7", "CM7", "DM7", "EM7", "FM7", "GM7"],
//     septimas_menores: ["Am7", "Bm7", "Cm7", "Dm7", "Em7", "Fm7", "Gm7"]
//   };

//   const requireContext = (context, chord) => {
//     try {
//       return context(`./${chord}.png`);
//     } catch (err) {
//       return null;
//     }
//   };

//   const loadChordImage = (chordName) => {
//     for (const [type, chords] of Object.entries(chordTypes)) {
//       if (chords.includes(chordName)) {
//         const context = require.context(`../Assets/acordes/${type}`, false, /\.png$/);
//         return requireContext(context, chordName);
//       }
//     }
//     return null;
//   };

//   const chordImages = chords.map((chord) => {
//     const imageUrl = loadChordImage(chord);
//     return imageUrl ? <img src={imageUrl} alt={chord} key={chord} /> : null;
//   });

//   return (
//     <>
//       <Navbar />
//       <div className="login-card" ref={songRef}>
//         <h2 className="song-title">{title}</h2>
//         <h3 className="song-author">{artist}</h3>
//         <div className="chord-images">
//           {chordImages}
//         </div>
//         <textarea
//           className="song-output"
//           value={remainingSongText}
//           readOnly
//           rows={10} // Ajusta según sea necesario
//         />
//       </div>
//       <div
//         ref={hiddenDivRef}
//         style={{
//           position: "absolute",
//           top: "-9999px",
//           left: "-9999px",
//           whiteSpace: "pre-wrap",
//           width: "80%", // Ajusta según sea necesario
//         }}
//       ></div>
//       <button onClick={exportToPDF} className="btn btn-primary mt-3">
//         Exportar a PDF
//       </button>
//       <Particle />
//     </>
//   );
// };

// export default ViewSong;
