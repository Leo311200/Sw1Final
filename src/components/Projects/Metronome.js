import React, { useState, useEffect, useRef } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Navbar from "../Navbar";
import tickMp3 from "./tick.mp3";

const Metronome = () => {
    const [PPM, setPPM] = useState(50);
    const [isPlaying, setIsPlaying] = useState(false);
    const intervalRef = useRef(null);
    const audioRef = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            intervalRef.current = setInterval(() => {
                if (audioRef.current) {
                    audioRef.current.play();
                }
            }, PPMToMilliseconds(PPM));
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [PPM, isPlaying]);

    const PPMToMilliseconds = (ppm) => {
        return (60 / ppm) * 1000;
    };

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    const handleDecreasePPM = (amount) => {
        setPPM((prevPPM) => Math.max(prevPPM - amount, 0));
    };

    const handleIncreasePPM = (amount) => {
        setPPM((prevPPM) => prevPPM + amount);
    };

    return (
        <>
            <Navbar />
            <Container fluid className="about-section">
                <Container>
                    <section id="metronomo" className="text-center w-25 mt-5 mx-auto">
                        <h1 id="ppm">{PPM}</h1>
                        <h2>PPM</h2>
                        <div>
                            <p className="d-flex justify-content-between gap-1">
                                <button onClick={() => handleDecreasePPM(5)} className="btn btn-secondary flex-grow-1">-5</button>
                                <button onClick={() => handleDecreasePPM(1)} className="btn btn-secondary flex-grow-1">-</button>
                                <button onClick={() => handleIncreasePPM(1)} className="btn btn-secondary flex-grow-1">+</button>
                                <button onClick={() => handleIncreasePPM(5)} className="btn btn-secondary flex-grow-1">+5</button>
                            </p>
                            <p>
                                <button onClick={handlePlayPause} className="d-block btn btn-success w-100">
                                    {isPlaying ? 'Pausar' : 'Empezar'}
                                </button>
                            </p>
                        </div>
                        <audio id="audio-metronomo" ref={audioRef}>
                            <source src="tick.ogg" type="audio/ogg" />
                            <source src={tickMp3} type="audio/mpeg" />
                        </audio>
                    </section>
                </Container>
                <Particle />
            </Container>
        </>
    );
};

export default Metronome;
