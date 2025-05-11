import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';
import attacks from "../attacks.json"

gsap.registerPlugin(useGSAP)

function Battle() {

    const { joueur, boss } = attacks;

    let intro = [
        "Dans ce combat, Martin se remémore les instants de sa vie pour combattre son ennemi. Cliquez pour continuer!",
        "Ce combat est au tour par tour, vous pourrez choisir les attaques que vous utiliserez avec le clic gauche de votre souris.  Cliquez pour continuer!",
        "Après l'attaque, une ligne de dialogue apparaitra ici. Vous devrez cliquez pour continuer.  Cliquez pour continuer!",
        "Tant que la boite de dialogue n'est pas vide, vous ne pourrez pas continuer. Cliquez pour continuer!",
        "",
    ];

    const [victory, setVictory] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [introState, setIntroState] = useState(intro);
    const [activeTab, setActiveTab] = useState('');
    const [index, setIndex] = useState(0);
    const [hp, setHp] = useState(9999);
    const [bossHp, setBossHp] = useState(200)
    const [limite, setLimite] = useState(0)
    const [menu1, setMenu1] = useState(["education", "stack", "experiences"]);

    const container = useRef();
    const knight = useRef();
    const roy = useRef();
    const attackRefs = useRef([]);
    const dialogueContainer = useRef();

    const menuEducation = ["La Capsule", "Paris-Saclay", "La Sorbonne"];
    const menuExperiences = ["PixiesVS", "Lunétoile", "Tournament", "RenoSkem"];
    const menuLimite = ["Bughazard", "Asyncslash", "Final Commit"]
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const onClickToContinue = (dialogue) => {
        if (dialogue !== "") {
          setIndex(index + 1);
        }
        if (index > 3 && index % 2 === 0 && dialogue !== "") {
            gsap.to(knight.current, {
                x: window.innerWidth - 340,
                repeat: 1,
                yoyo: true,
                ease: "power2.in",
                duration: 1,
              });
        const randomNumber = Math.floor(Math.random() * 4);
        const newEffect = boss.actions_disponibles[randomNumber];
        setHp(hp - newEffect.dommages)
        setIntroState(prevState => {
        const updatedIntro = [...prevState];
        updatedIntro.splice(updatedIntro.length - 1, 0, newEffect.texte)
        return updatedIntro;
    })
      };
    }

    const handleTabClick = (tab) => {
        if (introState[index] === "" && !gameOver) {
            setActiveTab(tab);
        } else {
            gsap.to(dialogueContainer.current, {
                x: 5,
                repeat: 5,
                yoyo: true,
                ease: "power1.inOut",
                duration: 0.05,
              });
        
        }
    };




const handleAttack = (index, nom) => {
    if (attackRefs.current[index]) {
      gsap.to(roy.current, {
        x: -window.innerWidth + 340,
        repeat: 1,
        yoyo: true,
        ease: "power2.in",
        duration: 1,
      });
      setActiveTab('')
      const newEffect = joueur.actions_disponibles.find(action => action.nom === nom);
      setBossHp(bossHp - newEffect.dommages)
      console.log('bossHp', bossHp)
      setIntroState(prevState => {
      const updatedIntro = [...prevState];
      updatedIntro.splice(updatedIntro.length - 1, 0, newEffect.texte)
      return updatedIntro;
      
    });
    if (limite < 99.99) {
       setLimite(limite + newEffect.limite)
    }
    if (limite === 66.66) {
        setMenu1(prevMenu1 => ["LIMITE", ...prevMenu1]);
    }
    }
  };

  useEffect(() => {
    if (bossHp <= 0) {
      setVictory(true);
    } else if (hp <= 0) {
      setGameOver(true);
    }
  }, [bossHp, hp])

  const restart = () => {
    setVictory(false);
    setGameOver(false)
    setBossHp(200);
    setHp(9999);
    setLimite(0);
    setIndex(0);
    setMenu1(["education", "stack", "experiences"])
    setIntroState([
        "Dans ce combat, Martin se remémore les instants de sa vie pour combattre son ennemi. Cliquez pour continuer!",
        "Ce combat est au tour par tour, vous pourrez choisir les attaques que vous utiliserez avec le clic gauche de votre souris.  Cliquez pour continuer!",
        "Après l'attaque, une ligne de dialogue apparaitra ici. Vous devrez cliquez pour continuer.  Cliquez pour continuer!",
        "Tant que la boite de dialogue n'est pas vide, vous ne pourrez pas continuer. Cliquez pour continuer!",
        "",
    ]);
    setActiveTab('');
  }


return(

    <div className='w-screen h-screen flex flex-col'>
    {victory ? (
      <div className='text-center animate-fade-in w-screen h-screen border-10'>
        <h1 className='text-5xl mb-4 text-green-400 pt-10'>🎉 Victoire !</h1>
        <p>Martin a vaincu son ennemi grâce à ses souvenirs !</p>
        <p className="text-lg font-semibold pt-10">Crédits</p>
        <div className="text-left space-y-6 text-sm w-screen pt-10">
            <div className='w-full flex flex-col items-center'>
                <p className="text-lg font-semibold underline mb-2">Développement :</p>
                <ul className="list-none space-y-1">
                <li>Martin Guilbert - Lead Developer</li>
                </ul>
            </div>
            <div className='w-full flex flex-col items-center pt-10'>
                <p className="text-lg font-semibold underline mb-2">Musique :</p>
                <ul className="ist-none  space-y-1">
                <li>Royale Battle - Artur Aravidi - free music archive</li>
                </ul>
            </div>

            <div className='w-full flex flex-col items-center pt-10'>    
                <p className="text-lg font-semibold underline mb-2">Images :</p>
                <ul className="mist-none  space-y-1">
                    <li>image de fond - Sagr_Ragr - reddit</li>
                    <li>Chevalier doré - bukkakebandit - imgur</li>
                    <li>Roy - gamingArtBySJ - imgur</li>
                    <li>Curseur - - </li>
                </ul>
            </div>
        </div>
        <button 
            className='mt-10 p-2 border-2 rounded' 
            onClick={restart}
        >
            Rejouer
        </button>
      </div>
    ) :  (
        <div className='w-scren h-screen flex flex-col'>
        <audio controls loop>
            <source 
                src="/Artur Aravidi - Royale Battle.mp3.mp3" 
                type='audio/mpeg'
            />
        </audio>
        <div ref={dialogueContainer} onClick={() => onClickToContinue(introState[index])} className='relative w-full h-1/4 flex justify-center items-center border-2 bg-combat-gradient'>
        {introState[index] !== '' && 
            <div onClick={() => onClickToContinue(introState[index])} className=''>
                {introState[index]}
            </div>
        }

        </div>
        <div ref={container} className='relative bg-[url(/origin_isle.webp)] bg-cover w-full h-1/2 flex items-end justify-between'>
        { gameOver &&
        <div className='flex justify-center items-center w-screen h-[50px] absolute top-1/2 bg-black opacity-80 z-10 cursor-pointer' onClick={restart}>
            <p className='text-red tracking-widest font-bold'>VOUS AVEZ PERI</p>
        </div>
        }
            <div ref={knight} className='z-0 knight h-3/5 w-[200px] relative ml-5 mb-5'>
                <div className='w-full min-h-2 border-2 border-[#F00] bg-black'></div>
                <div className={`top-0 min-h-2 bg-[#F00] absolute`} style={{ width: `${Math.max(bossHp, 0)}px` }}></div>
                    <Image src='/golden_knight.png' fill={true} className=" absolute" alt='golden knight'/>
                </div>
                <div ref={roy} className='roy h-2/5 w-[150px] relative mr-5 mb-5 '>
                    <Image src='/roy.png' fill={true} className="absolute" alt='golden knight'/>
                </div>
            </div>
        <div className='relative w-screen h-1/4 flex'>
            <div className='border-2 w-2/5 h-full rounded-xl bg-combat-gradient' >
                <p className='pl-5 text-xs'>NOM</p>
                <p className='pl-5 pt-2'>Martin</p>
            </div>
            <div className='border-2 w-3/5 h-full rounded-xl bg-combat-gradient'>
                <div className='flex justify-around'>
                    <div>
                    </div>
                    <div>
                        <p>HP</p>
                        <p>{hp}</p>
                    </div>
                    <div className=''>
                        <p>LIMITE</p>
                        <div className='border-2 h-[10px]'>
                            <div className='h-full bg-neonOrange' style={{width: `${limite}%`}}></div>
                        </div>
                    </div>
                    <div>
                        <p>TEMPS</p>
                        <div className='border-2 h-[10px]'>
                            {introState[index] === "" &&
                                <div className='w-full h-full bg-neonYellow'></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-around absolute top-2 left-40 border-2 w-1/3 h-4/5 rounded-xl bg-combat-gradient'>
                
                
            {menu1.map((tab, index) => (
            <div 
                key={tab}
                className='flex justify-around w-full h-1/3'
            >
            <div className='relative h-full w-1/2'>
                {hoveredIndex === index && (
                        <Image
                            src="/ff7_cursor.png"
                            alt="cursor"
                            fill
                            className='object-cover'
                        />

                )}
            </div>
            <button 
                onClick={() => handleTabClick(tab)} 
                className='w-1/2 flex items-center relative'
                style={{ background: tab === "LIMITE" ? 'none' : 'transparent' }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
            >
                <span
                    className={ tab === "LIMITE" ?"text-transparent bg-clip-text" : ""}
                    style={ tab === "LIMITE" ? {backgroundImage: "linear-gradient(to right, #FF0000, #FF7F00, #FFFF00, #00FF00, #0000FF, #4B0082, #8A2BE2)"} : {}}
                >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </span>
            </button>

        </div>
    ))}
            </div>
                {activeTab === 'education' && 
                <div className='flex flex-col absolute top-2 left-40 border-2 w-1/3 h-4/5 rounded-xl bg-combat-gradient'>

                        {menuEducation.map((tech, index) => (
                        <div className='flex justify-around w-full h-1/3'>
                            <div className='relative h-full w-1/2'>
                                {hoveredIndex === index && (
                                    <Image
                                        src="/ff7_cursor.png"
                                        alt="cursor"
                                        fill
                                        className='object-cover'
                                    />
                                )}
                            </div>
                            <button 
                                key={index} 
                                ref={(el) => attackRefs.current[index] = el} 
                                onClick={() => handleAttack(index, tech)}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className=' w-1/2 flex items-center'
                            >
                                {tech}
                            </button>
                        </div>
                        ))}
                    
                </div>}
                {activeTab === 'stack' && 
                <div className='flex flex justify-between absolute top-2 left-40 border-2 w-1/3 h-4/5 rounded-xl bg-combat-gradient'>
                        <div className='flex flex-col '>
                            {['HTML', 'CSS', 'JS', 'React', 'Express', 'Next'].map((tech, index) => (
                                <div className='flex justify-start'>
                                    <div className='relative w-[50px] h-[25px]'>
                                        {hoveredIndex === index && (
                                            <Image
                                                src="/ff7_cursor.png"
                                                alt="cursor"
                                                fill
                                                className='object-cover'
                                            />
                                        )}
                                    </div>
                                    <button             
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)} 
                                        key={index} 
                                        ref={(el) => attackRefs.current[index] = el} 
                                        onClick={() => handleAttack(index, tech)}
                                    >
                                        {tech}
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className='flex flex-col'>
                            {['MongoDB', 'Github', 'React Native', 'Tailwind', 'Typescript'].map((tech, index) => (
                            <div className='flex justify-start'>
                                <div className='relative w-[50px] h-[25px]'>
                                    {hoveredIndex === tech && (
                                        <Image
                                            src="/ff7_cursor.png"
                                            alt="cursor"
                                            fill
                                            className='object-cover'
                                        />
                                    )}
                                </div>
                        <button 
                            onMouseEnter={() => setHoveredIndex(tech)}
                            onMouseLeave={() => setHoveredIndex(null)} 
                            className='pr-2'
                            key={index} 
                            ref={(el) => attackRefs.current[index + 6] = el} 
                            onClick={() => handleAttack(index + 6, tech )}

                        >
                            {tech}
                        </button>
                    </div>
                    ))}
            </div>
        </div>}
                {activeTab === 'experiences' && 
                <div className='flex flex-col absolute top-2 left-40 border-2 w-1/3 h-4/5 rounded-xl bg-combat-gradient'>

                {menuExperiences.map((tech, index) => (
                <div className='flex justify-around w-full h-1/3'>
                    <div className='relative h-full w-1/2'>
                        {hoveredIndex === index && (
                            <Image
                                src="/ff7_cursor.png"
                                alt="cursor"
                                fill
                                className='object-cover'
                            />
                        )}
                    </div>
                    <button 
                        key={index} 
                        ref={(el) => attackRefs.current[index] = el} 
                        onClick={() => handleAttack(index, tech)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className=' w-1/2 flex items-center'
                    >
                        {tech}
                    </button>
                </div>
                ))}
            
        </div>}

        {activeTab === 'LIMITE' && 
                <div className='flex flex-col absolute top-2 left-40 border-2 w-1/3 h-4/5 rounded-xl bg-combat-gradient'>

                {menuLimite.map((tech, index) => (
                <div className='flex justify-around w-full h-1/3'>
                    <div className='relative h-full w-1/2'>
                        {hoveredIndex === index && (
                            <Image
                                src="/ff7_cursor.png"
                                alt="cursor"
                                fill
                                className='object-cover'
                            />
                        )}
                    </div>
                    <button 
                        key={index} 
                        ref={(el) => attackRefs.current[index] = el} 
                        onClick={() => handleAttack(index, tech)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        className=' w-1/2 flex items-center'
                    >
                        {tech}
                    </button>
                </div>
                ))}
            
        </div>}


        </div>
        </div>
        )}
    </div>
    )
}
    
export default Battle;