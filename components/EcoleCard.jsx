import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Image from 'next/image';
import Link from 'next/link';

function EcoleCard({ key, title, diploma, photo, alt, description, movement, year, isOdd, isHovered, onMouseEnter, onMouseLeave, github }) {

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
                    <Image src={photo} fill={true} className="object-top rounded-3xl" objectFit="cover" alt={alt}/>
                </div>
                }
            {isHovered && 
            <div className='border-2 border-neonPurple rounded-3xl w-full min-h-[20vh] flex flex-col order-purpleRedux justify-around'>
                <p className='text-center text-yellowJs'>{title}</p>
                <p className='text-center text-yellowJs italic'>{year} - {diploma}</p>
                <p className='text-center text-yellowJs italic'>{description}</p>
                <Link href={github} className='text-yellowJs text-center' target='_blank'>aller sur le site</Link>
            </div>
            }
        </div>
    ) :
(
    <div ref={container} className='w-1/2 min-h-[20vh] mt-5' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {!isHovered &&                 
                <div className='relative w-full min-h-[20vh] overflow-hidden border-2 border-yellowJs rounded-3xl'>
                    <Image src={photo} fill={true} className="object-top rounded-3xl" objectFit="fill" alt={alt}/>
                </div>
                }
            {isHovered && 
            <div className='border-2 border-neonYellow rounded-3xl w-full min-h-[20vh] flex flex-col justify-around'>
                <p className='text-center text-purpleRedux'>{title}</p>
                <p className='text-center text-purpleRedux italic'>{year} - {diploma}</p>
                <p className='text-center text-purpleRedux italic'>{description}</p>
                <Link href={github} className='text-purpleRedux text-center' target='_blank'>aller sur le site</Link>
            </div>
        }
        </div>
        )
    )
}

export default EcoleCard;