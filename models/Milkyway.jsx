/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: MozillaHubs (https://sketchfab.com/mozillareality)
License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)
Source: https://sketchfab.com/3d-models/sky-pano-milkyway-0016725c047a4ea18cd0b5e5ef2fe441
Title: Sky Pano - Milkyway
*/

import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThee} from '@react-three/fiber';
import milkywayScene from '../public/sky_pano_-_milkyway.glb';
import { a } from '@react-spring/three'; //enable animations

export function Milkyway(props) {
  const { nodes, materials } = useGLTF(milkywayScene)
  const milkywayRef = useRef()
  return (
    <a.group ref={milkywayRef}{...props}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          geometry={nodes.PanoSphere_lambert1_0.geometry}
          material={materials.lambert1}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </a.group>
  )
}

export default Milkyway;