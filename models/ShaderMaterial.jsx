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
    vec3 a = vec3(0.6, 0.7, 0.9);
    vec3 b = vec3(0.9, 0.5, 0.8);
    vec3 c = vec3(0.6, 1.0, 0.6);
    vec3 d = vec3(1.0, 0.9, 0.5);

    float sinT = sin(t);
    float cosT = cos(t);

    vec3 color1 = mix(a, b, sinT);
    vec3 color2 = mix(c, d, cosT);

    return mix(color1, color2, 0.5 + 0.5 * sin(t * 0.3));
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
    vec2 uv = (fragCoord * 2.0 - iResolution.xy) / iResolution.y;

    float dX = min(abs(uv.x - 0.5), abs(uv.x + 0.5));
    float dY = min(abs(uv.y - 1.0), abs(uv.y + 1.0));
    float d = min(dX, dY);

    float edgeColor = smoothstep(0.02, 0.05, d);

    vec3 col = palette(time * 0.2);

    fragColor = vec4(mix(col, vec3(0.9, 0.9, 0.9), edgeColor), 1.0);
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