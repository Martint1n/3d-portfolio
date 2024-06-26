import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import * as THREE from 'three';
import ShaderMaterial from './Portal'
import { useFrame } from '@react-three/fiber';

function TextCube() {

    const meshRef = useRef();

  // Utilisez useFrame pour faire tourner le cube à chaque frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= 0.001;
        }
    });

  const positions = [
    { pos: [0, 0, 1.01], rot: [0, 0, 0] }, // Front
    { pos: [0, 0, -1.01], rot: [0, Math.PI, 0] }, // Back
    { pos: [1.01, 0, 0], rot: [Math.PI, Math.PI / 2,  Math.PI ]}, // Right
    { pos: [-1.01, 0, 0], rot: [-Math.PI, -Math.PI / 2, -Math.PI ] }, // Left
    { pos: [0, 1.01, 0], rot: [-Math.PI / 2, 0, 0] }, // Top
    { pos: [0, -1.01, 0], rot: [Math.PI / 2, 0, 0] }, // Bottom
  ];

  const texts = ['Bienvenue dans mon portfolio', 'Vous voulez me contacter ?', 'Jetez un oeil à mes projets', 'Vous avez fait le tour du cube !', 'Face 5', 'Face 6'];

  return (
    <mesh ref={meshRef}>
      <boxGeometry 
      args={[2, 2, 2]} 
      rotation={[2, 0, 3]}
        />
      {/* <meshStandardMaterial color={'#F2CD5D'} /> */}
      <ShaderMaterial />
      {texts.map((text, index) => (
        <Text
          key={index}
          position={positions[index].pos}
          rotation={positions[index].rot}
          fontSize={0.5}
          color="#2E86AB"
          fontSize= {0.1}
        >
          {text}
        </Text>
      ))}
    </mesh>
  );
}

export default TextCube;