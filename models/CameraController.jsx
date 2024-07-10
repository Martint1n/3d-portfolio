import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useThree } from '@react-three/fiber';


function CameraController({cameraPos}) {

    const { camera } = useThree();
  
    useEffect(() => {
      camera.position.set(...cameraPos);
    }, [camera, cameraPos]);
  
    return null;
  }

export default CameraController;
