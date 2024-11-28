import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function View2() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <form>
      <label className="cantante">Nombre Completo </label> 
        <input
          type="text"
          className="song-output"
        />
        <br/>
      <label className="cantante">CI </label> 
        <input
          type="text"
          className="song-output"
        />
        <br/>
        <label className="cantante">Correo Electronico</label> 
        <input
          type="text"
          className="song-output"
        />
        
      </form>
    
      </Card.Body>
    </Card>
  );
}

export default View2;
