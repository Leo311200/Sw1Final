import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiImagej,
} from "react-icons/si";
import {
  AiFillFileImage,
} from "react-icons/ai";
import {
  CgImage,
  CgDollar,
  CgMusicNote,
  CgPlayListCheck,
  CgMore,
} from "react-icons/cg";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgImage />
        <br/>
        <p  style={{ fontSize: '15px' }}>Tutorial Image IA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgMusicNote/>
        <p  style={{ fontSize: '15px' }}>Tutorial Note IA</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgPlayListCheck />
        <p  style={{ fontSize: '15px' }}>Song Lyrics</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgDollar />
        <p  style={{ fontSize: '15px' }}>Annual price of $30</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgMore />
        <p  style={{ fontSize: '15px' }}>And more...</p>
      </Col>
    </Row>
  );
}

export default Toolstack;
