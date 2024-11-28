import React, { useEffect } from 'react';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';
import { Hands, HAND_CONNECTIONS } from '@mediapipe/hands';

const HandDetection = () => {
  useEffect(() => {
    const videoElement = document.getElementsByClassName('input_video')[0];
    const canvasElement = document.getElementsByClassName('output_canvas')[0];
    const canvasCtx = canvasElement.getContext('2d');

    function detectChord(landmarks) {
      const indexFinger = landmarks[8]; // Índice
      const middleFinger = landmarks[12]; // Medio
      const ringFinger = landmarks[16]; // Anular
      const pinkyFinger = landmarks[20]; // Meñique

      // ACORDES MAYORES
      if (indexFinger.y < middleFinger.y && middleFinger.y < ringFinger.y) {
        return 'Acorde de Do (C) detectado!';
      } else if (indexFinger.y > middleFinger.y && ringFinger.y <= indexFinger.y && ringFinger.y >= middleFinger.y) {
        return 'Acorde de Re (D) detectado!';
      } else if (indexFinger.y <= middleFinger.y && middleFinger.y >= indexFinger.y && middleFinger.y >= ringFinger.y) {
        return 'Acorde de Mi (E) detectado!';
      } else if (indexFinger.y > middleFinger.y && indexFinger.y > ringFinger.y && indexFinger.y > pinkyFinger.y && ringFinger.y > middleFinger.y && ringFinger.y > pinkyFinger.y) {
        return 'Acorde de Fa (F) detectado!';
      } else if (middleFinger.y > indexFinger.y && middleFinger.y > ringFinger.y && indexFinger.y > ringFinger.y) {
        return 'Acorde de Sol (G) detectado!';
      } else if (indexFinger.y >= middleFinger.y && middleFinger.y >= ringFinger.y) {
        return 'Acorde de La (A) detectado!';
      } else if (indexFinger.y > middleFinger.y && indexFinger.y > ringFinger.y && indexFinger.y > pinkyFinger.y && middleFinger.y >= ringFinger.y && ringFinger.y >= pinkyFinger.y) {
        return 'Acorde de Si (B) detectado!';
      } else if (indexFinger.y > middleFinger.y && indexFinger.y > ringFinger.y && ringFinger.y > middleFinger.y && ringFinger.y >= pinkyFinger.y) {
        return 'Acorde de Do menor (Cm) detectado!';
      } else if (middleFinger.y >= ringFinger.y && middleFinger.y >= indexFinger.y) {
        return 'Acorde de Re menor (Dm) detectado!';
      } else if (middleFinger.y >= ringFinger.y) {
        return 'Acorde de Mi menor (Em) detectado!';
      } else if (indexFinger.y >= middleFinger.y && indexFinger.y >= ringFinger.y && middleFinger.y >= ringFinger.y) {
        return 'Acorde de Do menor (Cm) detectado!';
      } else if (indexFinger.y >= middleFinger.y && indexFinger.y >= ringFinger.y && middleFinger.y >= ringFinger.y) {
        return 'Acorde de Sol menor (Gm) detectado!';
      } else if (indexFinger.y <= middleFinger.y && indexFinger.y <= ringFinger.y) {
        return 'Acorde de La menor (Am) detectado!';
      } else if (indexFinger.y <= middleFinger.y && indexFinger.y <= ringFinger.y) {
        return 'Acorde de Si menor (Bm) detectado!';
      }
      return null;
    }

    function onResults(results) {
      canvasCtx.save();
      canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);

      if (results.multiHandLandmarks) {
        for (const landmarks of results.multiHandLandmarks) {
          let detectedChord = detectChord(landmarks);

          if (detectedChord) {
            canvasCtx.fillStyle = 'rgba(255, 255, 255, 0.8)';
            canvasCtx.fillRect(canvasElement.width - 200, 20, 180, 50);
            canvasCtx.font = '16px Arial';
            canvasCtx.fillStyle = '#000';
            canvasCtx.fillText(detectedChord, canvasElement.width - 190, 50);
          }

          drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS, { color: '#00FF00', lineWidth: 5 });
          drawLandmarks(canvasCtx, landmarks, { color: '#FF0000', lineWidth: 2 });
        }
      }
      canvasCtx.restore();
    }

    const hands = new Hands({
      locateFile: (file) => {
        return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
      }
    });
    hands.setOptions({
      maxNumHands: 2,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    });
    hands.onResults(onResults);

    const camera = new Camera(videoElement, {
      onFrame: async () => {
        await hands.send({ image: videoElement });
      },
      width: 640,
      height: 480
    });
    camera.start();
  }, []); // El array vacío asegura que esto solo se ejecute una vez

  return (
    <div className="container">
      <video
        className="input_video"
        autoPlay
        playsInline
        style={{ display: 'none' }} // Oculta el video
      ></video>
      <canvas className="output_canvas" width="600px" height="440px"></canvas>
    </div>
  );
};

export default HandDetection;
