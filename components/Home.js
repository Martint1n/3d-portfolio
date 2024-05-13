import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Tokyo from '../models/Tokyo';

function Home() {
  const [screenScale, setScreenScale] = useState(null);
  const [screenPosition, setScreenPostion] = useState([0, -6.5, -43]);
  const [rotation, setRotation] = useState([0.1, 4.7, 0]);


  useEffect(() => {
    (function  () { // adjustTokyoForScreenSize 
      if(window.innerWidth < 768) {
        setScreenScale([0.9, 0.9, 0.9]);
      }else {
        setScreenScale([1, 1, 1]);
      }
      return [screenScale, screenPosition, rotation]
    })()
  }, [])

  return (
    <div className='w-full h-screen relative'>
      <Canvas 
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000,}} // les éléments entre 0.1 et 1000 seront affichés
      >
      <Suspense fallback={<Loader />}> //loading screen while waiting for 3D model

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
