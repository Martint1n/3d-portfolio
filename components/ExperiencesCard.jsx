import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

function ExperiencesCard({ key, title, app, stacks, photo, video, alt, movement, isOdd, isHovered, onMouseEnter, onMouseLeave, github }) {

    const stacksDisplay = stacks.map((Stack, i) => {
        return(
        <div className='w-1/6 '>
            {Stack}
        </div>
        )
    });

    gsap.registerPlugin(useGSAP)
    gsap.registerPlugin(ScrollTrigger)

    const container = useRef();

    console.log('test', container.current)

    useGSAP (
        () => {
            // gsap code here...
            gsap.to(container.current, { 
                x: movement, 
                scrollTrigger: container.current,
                scrub: 1,
                duration: 3
            });
        },
        { scope: container }
    ); 
       
    
    return (
        isOdd ? (
        <div key={key} ref={container} className='w-1/2 min-h-[20vh] mt-5 self-end ' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {!isHovered &&                 
                <div className='relative w-full min-h-[20vh] overflow-hidden border-2 border-purpleRedux rounded-3xl'>
                    {photo ? <Image src={photo} fill={true} className="object-top rounded-3xl" objectFit="cover" alt={alt}/> 
                    :
                    <video
                        width="640"
                        height="360"
                        controls
                        autoPlay
                        loop
                        muted
                        playsInline    
                    >
                        <source src="/RenoSkem_Finale.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas cette vidéo.
                    </video>
                    }
                </div>
                }
            {isHovered && 
            <div className='border-2 border-neonPurple rounded-3xl w-full min-h-[20vh] flex flex-col order-purpleRedux justify-between'>
                <div className=''>
                    <p className='text-center text-yellowJs'>{title}</p>
                    <p className='text-center text-yellowJs text-xl italic'>{app}</p>
                </div>
                <div className='w-full'>
                    <div className='w-full flex flex-wrap justify-center'>
                        { stacksDisplay }
                    </div>
                </div>
                <Link href={github} className='text-yellowJs text-center'>aller sur le site/github</Link>
            </div>
            }
        </div>
    ) :
(
    <div ref={container} className='w-1/2 min-h-[20vh] mt-5' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {!isHovered &&                 
        <div className='relative w-full min-h-[20vh] overflow-hidden border-2 border-yellowJs rounded-3xl'>        
            <Image src={photo} fill={true} className="object-top rounded-3xl" objectFit="cover" alt={alt}/>
            
        </div>
                }
            {isHovered && 
            <div className='border-2 border-neonYellow rounded-3xl w-full min-h-[20vh] flex flex-col justify-between'>
                <div className="" >
                    <p className='text-center text-purpleRedux'>{title}</p>
                    <p className='text-center text-purpleRedux text-xl italic'>{app}</p>
                </div>
                <div className='w-full'>
                    <div className='w-full flex flex-wrap justify-center'>
                        { stacksDisplay }
                    </div>
                </div>
                <Link href="https://github.com/Martint1n" className='text-purpleRedux text-center'>aller sur le site/github</Link>
            </div>
        }
        </div>
        )
    )
}

export default ExperiencesCard;