import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import ShaderMaterial from './Portal'
import { useFrame } from '@react-three/fiber';
import { useTranslation } from 'react-i18next';

function TextCube({showBottomHalf}) {
  const { t } = useTranslation();
    const meshRef = useRef();

  // Utilisez useFrame pour faire tourner le cube à chaque frame
    useFrame(() => {
        if (meshRef.current) {
            meshRef.current.rotation.y -= 0.002;
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

  const texts = [
    { content: t('welcomeCube'), color: '#2E86AB', textDecoration: '', click: ''},
    { content: t('contactCube'), color: '#F2CD5D', textDecoration: 'underline', click: 'contact'},
    { content: t('projectsCube'), color: '#FF5733', textDecoration: 'underline', click: 'projects' },
    { content: 'Vous avez fait le tour du cube !', color: '#9A1E22', textDecoration: '', click: '' },
    { content: t('changeColorCube'), color: '#4CAF50', textDecoration: 'underline', click: '' },
    { content: t('github'), link: 'https://github.com/Martint1n?tab=repositories', color: '#795548', textDecoration: 'underline', click: '' },
];
  return (
    <mesh ref={meshRef}>
      <boxGeometry 
        args={[2, 2, 2]} 
        rotation={[2, 0, 3]}
      />
      {/* <meshStandardMaterial color={'#F2CD5D'} /> */}
      <ShaderMaterial />
      {texts.map((text, index) => (
        <Html
          key={index}
          occlude
          transform
          position={positions[index].pos}
          rotation={positions[index].rot}
          scale={[0.3, 0.3, 1]}
          fontSize={0.005}
          color="#2E86AB"
        >
          <div onClick={() => showBottomHalf(texts[index].click)} className='h-96px'>
            <a href={texts[index]?.link} target="_blank" style={{ color: texts[index].color, textDecoration: texts[index].textDecoration }}>
              {texts[index].content}
            </a>
          </div>
        </Html>
      ))}
    </mesh>
  );
}

export default TextCube;