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
import useSound from 'use-sound';
import ShaderMaterial from '../models/Portal';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import TextCube from '../models/TextCube';

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
  const [playSound] = useSound('laser-one-shot-1.wav');

  // useEffect(() => { // window nécessite un useEffect avec NextJS
  //   function adjustTokyoForScreenSize() {
  //     if (window.innerWidth < 768) {
  //       setScreenScale([0.9, 0.9, 0.9]);
  //     } else {
  //       setScreenScale([1, 1, 1]);
  //     }
  //   }
  //   adjustTokyoForScreenSize();
  // }, [])

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
  // const handleClick = (event) => {
  //   const { clientX, clientY } = event;
  //   setMousePosition({x: clientX, y: clientY})
  // };
  
  // const audioRef = useRef();
  // const handlePlay = () => {
  //   audioRef.current.play();
  // };

  return (
    <div className='flex flex-col w-screen h-screen justify-between border-2 bg-blue p-5'>
      <div className='flex justify-between'>
        <p className='text-whiteBlue text-2xl'>Bienvenue</p>
        <div className="fi fi-fr"></div>
      </div>

      <div className='w-[80vw] min-h-[50vh] border-2 border-yellow self-center'>
      {/* <Canvas 
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
          rotation={[2, 0, 3]}
          pivotPoint = {pivotPoint}
          axis={new THREE.Vector3(1, 1, 0)} 
          angle={Math.PI / 2}
          orbitRadius={60}
      />
      <ScrollControls pages={3} damping={0.25}>
        { milleniumFly && <Millenium /> }

      <Tokyo 
        scale= {screenScale}
        position={screenPosition}
        rotation={rotation}
        resizeCamera = {resizeCamera}
      />
      </ScrollControls>
      </Canvas>  */}
      <Canvas camera={{ position: [0, 0, 50] }} frameloop="always">
        <ambientLight intensity={0.2} />
        <TextCube/>
        <SwordFishII
            scale= {[0.0002, 0.0002, 0.0002]}
            position={[0, 0, 0]}
            rotation={[2, 0, 3]}
            pivotPoint = {pivotPoint}
            axis={new THREE.Vector3(1, 1, 0)} 
            angle={Math.PI / 2}
            orbitRadius={10}
          />
        <OrbitControls />
        </Canvas>
      </div>

      <div className='flex justify-center pb-15'>
        <p className='text-whiteBlue w-3/4 text-center'>
        En attente d'instruction du Cube.
        </p>
      </div>
      {/* <audio ref={audioRef}>
        <source src="/laser-one-shot-1.wav" type="audio/wav" />
      </audio>
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
          rotation={[2, 0, 3]}
          pivotPoint = {pivotPoint}
          axis={new THREE.Vector3(1, 1, 0)} 
          angle={Math.PI / 2}
          orbitRadius={60}
      />
      <ScrollControls pages={3} damping={0.25}>
        { milleniumFly && <Millenium /> }

      <Tokyo 
        scale= {screenScale}
        position={screenPosition}
        rotation={rotation}
        resizeCamera = {resizeCamera}
      />
      </ScrollControls>
      <Laser count={count} mousePosition={mousePosition}/>
      </Canvas> */}
      {/* <div>
        <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <circleGeometry args={[1, 64]} />
          <ShaderMaterial />
        </Canvas>
      </div> */}
    </div>
  );
}

export default Home;
