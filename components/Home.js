import { Suspense, useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import Loader from '../components/Loader';
import Tokyo from '../models/Tokyo';
import Milkyway from '../models/Milkyway';
import Millenium from '../models/Millenium';
import SwordFishII from '../models/SwordFishII';
import Overlay from './Overlay';
import Laser from '../models/Laser';
import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei';
import { SpotLight } from 'three';
import { useScroll } from '@react-spring/three'; 
import * as THREE from 'three';

function Home() {
  const [screenScale, setScreenScale] = useState(null); // scale de Tokyo
  const [screenPosition, setScreenPostion] = useState([0, 0, 0]); // position de Tokyo
  const [rotation, setRotation] = useState([0.1, 4.7, 0]); // Rotation de Tokyo
  const [xRotationSwordFish, setXRotationSwordFish] = useState(2);
  const [yRotationSwordFish, setYRotationSwordFish] = useState(0);
  const [zRotationSwordFish, setZRotationSwordFish] = useState(3);
  const totalRotationSwordFish = [-Math.PI / xRotationSwordFish, yRotationSwordFish, zRotationSwordFish]
  const spotlight = useMemo(() => new SpotLight('#fff'), []);
  const spotlightTowardUser = useMemo(() => new SpotLight('#fff'), []);
  const [count, setCount] = useState(0)
  const pivotPoint = new THREE.Vector3(0, 0, 0);


  useEffect(() => { // window nécessite un useEffect avec NextJS
    function adjustTokyoForScreenSize() {
      if (window.innerWidth < 768) {
        setScreenScale([0.9, 0.9, 0.9]);
      } else {
        setScreenScale([1, 1, 1]);
      }
    }
    adjustTokyoForScreenSize();
  }, [])

  const resizeCamera = () => {
    // ajouter un temps de chargement au clic pour charger les éléments (millenium pour le moment)
    setScreenPostion([0, -6, -43])
  }

let milleniumFly = false;
if(screenPosition[2] < 0) {
  milleniumFly = true;
} else {
  milleniumFly = false;
}

const increaseCount = () => {
  console.log('click')
  setCount(count + 1)
}
const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Fonction pour gérer le clic de la souris
  const handleClick = (event) => {
    const { clientX, clientY } = event;
    setMousePosition({x: clientX, y: clientY})
  };
  
  return (
    <div className='w-full h-screen relative cursor-reticle' onClick={(e) => {handleClick(e)}}>
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
      <Milkyway 
        scale= {[100, 100, 100]}
        position={[0, 2, 1]}
      />
        <SwordFishII
          scale= {[0.0009, 0.0009, 0.0009]}
          position={[-20, 10, -20]}
          rotation={(-Math.PI / [2, 0, 3])}
          pivotPoint = {pivotPoint}
          axis={new THREE.Vector3(1, 1, 0)} 
          angle={Math.PI / 2}
          orbitRadius={60}
      />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay onScroll={() => swordFishScroll()}/>
        { milleniumFly && <Millenium /> }

      <Tokyo 
        scale= {screenScale}
        position={screenPosition}
        rotation={rotation}
        resizeCamera = {resizeCamera}
      />
      </ScrollControls>
      <Laser count={count} mousePosition={mousePosition}/>
      </Canvas>
    </div>
  );
}

export default Home;
