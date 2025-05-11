import React, { useState, useRef } from 'react'
import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"

function Header({changeLanguage}) {

  const [selectedFlag, setSelectedFlag] = useState("fi fi-fr")
  const { t } = useTranslation();
  const capsule = useRef();
  const container = useRef();

  useGSAP(
    () => {
      gsap.to(capsule.current, {
        rotation: "+=360",
        duration: 3,
        repeat: -1,
        ease: "none", // pour une vitesse constante
        transformOrigin: "50% 50%" // important si SVG ou élément centré
      });
    },
    { scope: container }
  );

  const flag = (
    <PopoverContent>
      <div className="px-1 py-2">
        <div onClick={() => (changeLanguage('fr', selectedFlag), setSelectedFlag("fi fi-fr"))} className="fi fi-fr mr-5"></div>
        <div onClick={() => (changeLanguage('en', selectedFlag), setSelectedFlag("fi fi-us"))} className="fi fi-us mr-5"></div>
        <div onClick={() => (changeLanguage('jp', selectedFlag), setSelectedFlag("fi fi-jp"))} className="fi fi-jp"></div>
      </div>
    </PopoverContent>
  );

    return (
        <div className='flex justify-between'>
          <div ref={container}>
            <Image src="capsule-icon.svg" width={25} height={25} ref={capsule} className='ml-5 mt-5'/>
          </div>
            <div className='flex pr-2'>
                <Popover placement={'bottom-start'} color="#F00"> 
                    <PopoverTrigger>
                        <div className={selectedFlag}></div>
                    </PopoverTrigger>
                {flag}
                </Popover>
            </div>
        </div>
    )
}

export default Header