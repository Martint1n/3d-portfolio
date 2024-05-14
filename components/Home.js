import { Suspense, useState, useEffect, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Tokyo from '../models/Tokyo';
import { OrbitControls } from '@react-three/drei';
import { SpotLight } from 'three';

function Home() {
  const [screenScale, setScreenScale] = useState(null);
  const [screenPosition, setScreenPostion] = useState([0, -6.5, -43]);
  const [rotation, setRotation] = useState([0.1, 4.7, 0]);


  useEffect(() => {
    function adjustTokyoForScreenSize() {
      if (window.innerWidth < 768) {
        setScreenScale([0.9, 0.9, 0.9]);
      } else {
        setScreenScale([1, 1, 1]);
      }
    }

    adjustTokyoForScreenSize();
  }, [])
  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const spotlightTowardUser = useMemo(() => new SpotLight('#fff'), []); // Créer une instance pour le deuxième projecteur

  return (
    <div className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent absolute'
        camera={{near: 0.1, far: 1000,}} // les éléments entre 0.1 et 1000 seront affichés
      >
      <Suspense fallback={<Loader />}> //loading screen while waiting for 3D model

        <group>
          <primitive
            object={spotlight}
            position={[0, 5, -70]}
            angle={4.1}
            intensity={10000}
            penumbra={0.5}
          />
          <primitive object={spotlight.target} position={[0, 0, -120]} />
        </group>
        <group>
          <primitive
            object={spotlightTowardUser}
            position={[0, 5, -70]}
            angle={Math.PI/2}
            intensity={10000}
            penumbra={0.1}
          />
          <primitive object={spotlightTowardUser.target} position={[0, 0, 120]} />
        </group>
        <OrbitControls />
      </Suspense>
      <Tokyo 
        scale= {screenScale}
        position={screenPosition}
        rotation={rotation}
      />
      </Canvas>
    </div>
  );
}

export default Home;
