import React, { useRef, useEffect } from 'react';
import * as THREE from 'three'
import ShaderMaterial from './ShaderMaterial'
import { extend, useFrame } from '@react-three/fiber';

function Cube() {
    const cubeRef = useRef();
    const rotationNumberX = Math.random() * (0.002 + 0.002) - 0.002
    const rotationNumberY = Math.random() * (0.002 + 0.002) - 0.002

  // Utilisez useFrame pour faire tourner le cube à chaque frame
    useFrame(() => {
        if (cubeRef.current) {
          cubeRef.current.rotation.x += -rotationNumberX;
          cubeRef.current.rotation.y -= rotationNumberY;
        }
    });

  return (
    <lineSegments ref={cubeRef}>
      <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(2, 2, 2)]}/>
      {/* <lineBasicMaterial attach="material" color={0x00ffff}/>*/}
      <ShaderMaterial />
    </lineSegments>

  );
}

export default Cube;