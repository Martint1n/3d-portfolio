import { Suspense, useState, useEffect, useMemo, useRef } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import CameraController from '../models/CameraController';
import "/node_modules/flag-icons/css/flag-icons.min.css";
import Cube from '../models/Cube';
import { useTranslation } from 'react-i18next';
import Header from './Header';
import { SvgCss, SvgHtml, SvgExpress, SvgJs, SvgGit, SvgGithub, SvgMongoDB, SvgNext, SvgReact, SvgRedux, SvgTailwind, SvgTypescript } from './icons/Skillsvgicons';
import StackCard from './StackCard';
import { BorderBeam } from "../src/components/components/ui/border-beam.tsx";
import Experiences from './Experiences.jsx';
import ExperiencesCard from './ExperiencesCard.jsx';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

function Home() {

const colorTheme = {
  white: "#f4f4f4",
  black: "#1e1e2f",
  blueCSS: "#a7d8ff",
  orangeHTML: "#ffb3a7",
  yellowJs: "#fff5a0",
  greenMongo: "#9eed9d",
  purpleRedux: "#c8a2d8",
  neonBlue: "#00bcd4",
  neonOrange: "#ff7f00",
  pastelRed: "#ff7a94",
  neonRed: "#ff4f6c",
  neonYellow: "#faf200",
  neonPurple: "#9b4dff",
}

const cubeRef = useRef();
const tl = useRef();
const textRef = useRef();
const pingRef = useRef();
const pongRef = useRef();


gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)


useGSAP(() => {

  const pongRefRect = pongRef.current.getBoundingClientRect();
  const textRefRect = textRef.current.getBoundingClientRect();
  const pongWidth = pongRefRect.width;
  const textWidth = textRefRect.width
  
  tl.current = gsap
  .timeline({
    scrollTrigger: {
      trigger: textRef.current,
      start: '10 top',
      end: '100% 100%',
      markers: true,
      scrub: true,
    }
  })

  .to(cubeRef.current, {
      x: textWidth - 3 * pongWidth,
      y: "50vh",
      ease: "poweri.in",
      rotation: 360,
      borderColor: colorTheme.neonRed
    }, 0)
    .to(cubeRef.current, {
      x: 0,
      y: "100vh",
      ease: "poweri.in",
      borderColor: colorTheme.neonYellow,
      borderRadius: "100%",
    }, 1)
    .to(cubeRef.current, {
      x: textWidth - 3 * pongWidth,
      y: "150vh",
      borderColor: colorTheme.neonBlue,
    }, 2)
    .to(cubeRef.current, {
      x: 0,
      y: "200vh",
      borderRadius: "0%",
      borderColor: colorTheme.neonOrange,
    }, 3)

    .to(pingRef.current, {
      x: 0,
      y: "50vh",
      borderColor: colorTheme.neonPurple,
    }, 0)
    .to(pingRef.current, {
      x: 0,
      y: "100vh",
      ease: "back.in(4)"
    }, 1)
    .to(pingRef.current, {
      x: 0,
      y: "200vh",
      ease: "slow(0.7, 0.7, false)",
    }, 3)

    .to(pongRef.current, {
      x: 0,
      y: "50vh",
      ease: "slow(0.7, 0.7, false)",
      borderColor: colorTheme.neonPurple,
    }, 0)
    .to(pongRef.current, {
      x: 0,
      y: "150vh",
      ease: "back.in(4)"
    }, 1)

}, {scope: cubeRef});

const svgList = [
  <SvgCss color1={colorTheme.blueCSS} color2={colorTheme.black}/>, 
  <SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, 
  <SvgJs color1={colorTheme.yellowJs} color2={colorTheme.black}/>, 
  <SvgExpress color2={colorTheme.white}/>, 
  <SvgGit color1={colorTheme.orangeHTML}/>, 
  <SvgGithub/>, 
  <SvgMongoDB color1={colorTheme.greenMongo}/>, 
  <SvgNext/>, 
  <SvgReact color1={colorTheme.blueCSS}/>, 
  <SvgRedux color1={colorTheme.purpleRedux}/>, 
  <SvgTailwind color1={colorTheme.blueCSS}/>, 
  <SvgTypescript color1={colorTheme.blueCSS} color2={colorTheme.black}/>
];

  
  const [cameraPos, setCameraPos] = useState([2, 0, 4])
  const [hoverStates, setHovereStates] = useState({
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
  })

  const changeIsHovered = (i) => {
    setHovereStates(prevStates => ({
      ...prevStates,
      [`hover${i}`]: !hoverStates[`hover${i}`],
    }))
  }
 
  const { i18n } = useTranslation();
  
  const changeLanguage = (lng, flag) => {
    i18n.changeLanguage(lng);
    return flag
  };

  const experiencesTable = [
    {id: 1, title: "pixiesVS", app: "mobile app", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black} />, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], url: "", alt: "pixiesVS app", movement: "100%", isHovered: hoverStates.hover1},
    {id: 2, title: "Lunetoile", app: "web app", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], url: "/lunetoile_home.png", alt: "lunetoile website", movement: "-100%", isHovered: hoverStates.hover2},
    {id: 3, title: "house-tournament", app: "web app", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], url: "", alt: "house-tournament website", movement: "100%",isHovered: hoverStates.hover3},
    {id: 4, title: "RenoSkem", app: "mobile app", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgCss color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgRedux color1={colorTheme.purpleRedux}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], video: "/RenoSkem_Finale.mp4", movement: "-100%", isHovered: hoverStates.hover4},
  ]

    const experiences = experiencesTable.map((experience, i) => {
      return (
        <ExperiencesCard 
          key={experience.id} 
          title={experience.title} 
          app={experience.app} 
          stacks={experience.stacks} 
          photo={experience.url} 
          video={experience.video} 
          alt={experience.alt}
          movement={experience.movement} 
          isOdd={i % 2 !== 0} 
          isHovered={experience.isHovered} 
          onMouseEnter={() => changeIsHovered(experience.id)} 
          onMouseLeave={() => changeIsHovered(experience.id)}/>
      )
    })

  return (
    <div ref={textRef} className='flex flex-col w-screen'>
      
      <Header changeLanguage={changeLanguage}/>

        {/*<div className=' flex w-full h-full border-2'>
          <div className='w-1/10 min-h-[10%] border-8'></div>
          <Canvas frameloop="always" >
            <CameraController cameraPos={cameraPos} />
            <ambientLight intensity={1.0} />
            <Cube ref={cubeRef} />
          </Canvas>
        </div> */}
      <div className='min-h-screen min-w-screen flex items-center'>
          <div ref={pingRef} className='w-[10px] h-[50px] border-8 border-black rounded-tr-lg rounded-br-lg'></div>
          <div ref={cubeRef} className='w-[10px] h-[10px] border-8 border-black'></div>
          <div ref={pongRef} className='w-[10px] h-[50px] border-8 ml-auto border-black rounded rounded-tl-lg rounded-bl-lg'></div>
      </div>

      <div className='text-center text-5xl'>Bonjour, ici <br/> 
        <span className='text-3xl text-7xl'>Martin Guilbert </span><br/> 
        <span className='text-yellow text-6xl'>Développeur Fullstack</span>
      </div>
      <div className=" border-2 w-[90vw] flex flex-wrap self-center justify-center">
        { svgList.map((svg, i) => <StackCard key={i} svgIcon={svg} isOdd={i % 2 !== 0} />) }
        <BorderBeam />
      </div>

      <div className='flex w-[90vw] mt-5'>
        <div className='test w-1/2 text-center'>EXPERIENCES</div>
        <div className='w-1/2 text-center'>ECOLE</div>
      </div>

      <div className='w-[90vw] flex flex-col self-center'>
        { experiences }
      </div>

    </div>
  );
}

export default Home;