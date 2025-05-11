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
import EcoleCard  from './EcoleCard.jsx';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { RoughEase } from 'gsap/dist/EasePack';
import Link from 'next/link';
import Contact from './Contact.jsx';

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
const overRef = useRef();
const restartRef = useRef();

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(RoughEase)


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
      end: '100% 80%',
      markers: true,
      scrub: true,
    }
  })

  .to(cubeRef.current, {
      x: textWidth - 3 * pongWidth,
      y: "50vh",
      ease: "power2.inOut",
      rotation: 360,
      borderColor: colorTheme.neonRed,
    })
    .to(cubeRef.current, {
      x: 0,
      y: "100vh",
      ease: "power2.inOut",
      borderColor: colorTheme.neonYellow,
      borderRadius: "100%",
    })
    .to(cubeRef.current, {
      x: textWidth - 3 * pongWidth,
      y: "150vh",
      borderColor: colorTheme.neonBlue,
    })
    .to(cubeRef.current, {
      x: -40,
      y: "250vh",
      borderRadius: "0%",
      borderColor: colorTheme.neonOrange,
      rotation: 360
    })

    .to(pingRef.current, {
      x: 0,
      y: "50vh",
      borderColor: colorTheme.neonPurple,
    }, 0)
    .to(pingRef.current, {
      x: 0,
      y: "100vh",
      ease: "power1.out",
    }, 0.4)
    .to(pingRef.current, {
      x: 0,
      y: "240vh",
    }, 1.5) 

    .to(pongRef.current, {
      x: 0,
      y: "50vh",
      ease: "power1.out",
      borderColor: colorTheme.neonPurple,
    }, 0)
    .to(pongRef.current, {
      x: 0,
      y: "150vh",
      ease: "back.in(4)"
    }, 0.8)

    .to(overRef.current, {
      ease: "slow(0.5, 0.5, true)",
      y: "-100",
      color: colorTheme.neonBlue
    })

}, {scope: cubeRef});

gsap.to(restartRef.current, {
  ease: "rough({template: none.out, strength: 5, points: 300, taper: none, randomize: true, clamp: false})",
  opacity: 0.7,
  repeat: -1,
  duration: 2.5
})


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

  const [show, setShow] = useState('');
  const [cameraPos, setCameraPos] = useState([2, 0, 4]);
  const [hoverStates, setHoverStates] = useState({
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
  });
  const [colorExp, setColorExp] = useState('text-white');
  const [colorEco, setColorEco] = useState('text-white');

  const handleMouseEnter = (i) => {
    setHoverStates(prevStates => ({
      ...prevStates,
      [`hover${i}`]: true,
    }));
  };
  
  const handleMouseLeave = (i) => {
    setTimeout(() => {
      setHoverStates(prevStates => ({
        ...prevStates,
        [`hover${i}`]: false,
      }));
    }, 150); // Délai pour laisser le temps à la transition visuelle
  };
  
  const changeShow = (select) => {
    setShow(select);
    if ( select === "experiences") {
      setColorExp("text-neonPurple");
      setColorEco("text-white");
    } else{
      setColorExp("text-white");
      setColorEco("text-neonPurple");
    }

  }

  const { i18n } = useTranslation();
  
  const changeLanguage = (lng, flag) => {
    i18n.changeLanguage(lng);
    return flag
  };

  const experiencesTable = [
    {id: 1, title: "pixiesVS", app: "mobile app", github:"https://github.com/Martint1n", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black} />, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], photo: "", alt: "Site PixiesVS en cours de construction", movement: "100%", isHovered: hoverStates.hover1},
    {id: 2, title: "Lunetoile", app: "web app", github:"https://github.com/Martint1n/lunetoile-frontend", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], photo: "/lunetoile_home.png", alt: "lunetoile website", movement: "-100%", isHovered: hoverStates.hover2},
    {id: 3, title: "house-tournament", app: "web app", github:"https://github.com/Martint1n/HousesTournament", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgTailwind color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], photo: "/house_tournament.png", alt: "house-tournament website", movement: "100%",isHovered: hoverStates.hover3},
    {id: 4, title: "RenoSkem", app: "mobile app", github:"https://github.com/craftByElla", stacks: [<SvgHtml color1={colorTheme.orangeHTML} color2={colorTheme.black}/>, <SvgCss color1={colorTheme.blueCSS}/>, <SvgReact color1={colorTheme.blueCSS}/>, <SvgRedux color1={colorTheme.purpleRedux}/>, <SvgExpress color2={colorTheme.white}/>, <SvgMongoDB color1={colorTheme.greenMongo}/>], photo: "/renoskem.png", movement: "-100%", isHovered: hoverStates.hover4},
  ]

  const ecoleTable = [
    {id: 1, title: "La Capsule", photo:"/la_capsule.png", diploma: "RNCP6 Concepteur développeur d'applications web & mobile", github: "https://www.lacapsule.academy/formation-developpeur-web/full-time", alt: "La Capsule", movement: "100%", isHovered: hoverStates.hover1, year:"2024", description: "React, Express, MongoDB, Vercel"},
    {id: 2, title: "Paris-Saclay", photo:"/paris_saclay.png", diploma: "Master 2 Sciences des Matériaux et Management Industriel", github: "https://www.universite-paris-saclay.fr/formation/master/sciences-et-genie-des-materiaux", alt: "Paris-Saclay", movement: "-100%", isHovered: hoverStates.hover2, year: "2020-2022", description: "Python, Métallurgie, Cristallographie"},
    {id: 3, title: "La Sorbone", photo:"/sorbonne.png", diploma: "Licence 3 Physique Chimie des Matériaux", github: "https://sciences.sorbonne-universite.fr/formation-sciences/offre-de-formation/licences/licences-professionnelles-l3/licence-0", alt: "La Sorbonne", movement: "100%",isHovered: hoverStates.hover3, year: "2018-2019", description: "Métallurgie, Polymères, Corrosion"},
  ]


    const experiences = experiencesTable.map((experience, i) => {
      return (
        <ExperiencesCard 
          key={experience.id} 
          title={experience.title} 
          app={experience.app} 
          stacks={experience.stacks} 
          photo={experience.photo} 
          github={experience.github}
          video={experience.video} 
          alt={experience.alt}
          movement={experience.movement} 
          isOdd={i % 2 !== 0} 
          isHovered={experience.isHovered} 
          onMouseEnter={() => handleMouseEnter(experience.id)} 
          onMouseLeave={() => handleMouseLeave(experience.id)}
        />
      )
    })

    const ecoles = ecoleTable.map((ecole, i) => {
      return (
        <EcoleCard 
          key={ecole.id} 
          title={ecole.title} 
          diploma={ecole.diploma} 
          stacks={ecole.stacks} 
          photo={ecole.photo} 
          github={ecole.github}
          video={ecole.video} 
          alt={ecole.alt}
          year={ecole.year}
          description={ecole.description}
          movement={ecole.movement} 
          isOdd={i % 2 !== 0} 
          isHovered={ecole.isHovered} 
          onMouseEnter={() => handleMouseEnter(ecole.id)} 
          onMouseLeave={() => handleMouseLeave(ecole.id)}
        />
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

      <div className='absolute top-1/3 text-center w-screen h-screen text-5xl'>
        <span className='text-xl'>🖼️ Bienvenue dans mon <span className='text-neonOrange text-3xl'>portfolio !</span></span><br/> 
        <span className='text-xl'>🧑 Je m'appelle <span className='text-neonOrange text-3xl'>Martin Guilbert</span></span><br/> 
        <span className='text-yellow text-xl'>💻 Je suis <span className='text-neonOrange text-3xl'>Développeur Fullstack</span></span><br/>
        <span className='text-yellow text-xl'>⚔️ Découvrez mon parcours dans un <span className='text-neonBlue text-3xl underline'><Link href={"/battlePage"}>combat !</Link></span></span><br/>
        <span className='text-yellow text-xl'>⬇️ Ou simplement en </span><span className='text-neonOrange text-3xl'>scrollant ...</span>
      </div>
      <div className='relative flex flex-col items-center w-screen'>
        <div className='w-2/5 border-2 rounded-xl text-center text-5xl text-neonPurple'>
          STACKS
        </div>

        <div className="mt-10 w-[90vw] flex flex-wrap self-center justify-center">
          { svgList.map((svg, i) => <StackCard key={i} svgIcon={svg} isOdd={i % 2 !== 0} />) }
        </div>
        
      </div>

      <div className='relative flex justify-around w-screen mt-20'>
        <div className={`w-2/5 text-center text-5xl border-2 rounded-xl cursor-pointer ${colorExp}`} onClick={() => changeShow('experiences')}>EXPERIENCES</div>
        <div className={`w-2/5 text-center text-5xl border-2 rounded-xl cursor-pointer ${colorEco}`} onClick={() => changeShow('ecoles')}>ECOLES</div>
      </div>
      {show === "experiences" &&
        <div className='w-[90vw] flex flex-col self-center mt-10'>
          { experiences }
        </div>
      }
      {show === "ecoles" &&
        <div className='w-[90vw] flex flex-col self-center mt-10'>
          { ecoles }
        </div>
      }
      <div className='relative flex justify-center mt-20 mb-10'>
        <a href="/cv.pdf" download="CV-Martin-Guilbert.pdf" className='text-xl'>💾 Cliquez ici pour télécharger <span className='text-neonOrange text-3xl underline'>mon CV</span></a>
      </div>
      <div className='flex justify-center mt-10 mb-10'>
        <p className='text-xl'>📨 N'hésitez pas à m'envoyer un mail pour <span className='text-neonOrange text-3xl'>me contacter !</span></p>
      </div>
      <Contact/>
    </div>
  );
}

export default Home;