import * as THREE from 'three';
import React, { useRef, useMemo } from 'react';
import { extend, useFrame } from '@react-three/fiber';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float time;
  uniform vec2 iResolution;
  varying vec2 vUv;

  vec3 palette(float t) {
    vec3 a = vec3(0.413, 0.424, 0.530);
    vec3 b = vec3(0.869, 0.326, 0.943);
    vec3 c = vec3(1.185, 0.004, 0.212);
    vec3 d = vec3(4.697, 5.138, 5.860);

    return a + b * cos(6.28318 * (c * t + d));
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;

    float d = length(uv);
    vec3 col = palette(d + time);

    d = sin(d * 5.0 + time) / 5.0;
    d = abs(d);
    d = 0.01 / d;

    col *= d;

    fragColor = vec4(col, 1.0);
  }

  void main() {
    mainImage(gl_FragColor, vUv * iResolution.xy);
  }
`;

extend({ ShaderMaterial: THREE.ShaderMaterial });

const ShaderMaterial = () => {
  const material = useRef();
  const uniforms = useMemo(() => ({
    time: { value: 0 },
    iResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
  }), []);

  useFrame((state) => {
    material.current.uniforms.time.value = state.clock.getElapsedTime();
  });

  return (
    <shaderMaterial
      ref={material}
      attach="material"
      uniforms={uniforms}
      vertexShader={vertexShader}
      fragmentShader={fragmentShader}
      transparent
    />
  );
};

export default ShaderMaterial;