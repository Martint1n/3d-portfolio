import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react"


function ExperiencesCard() {
gsap.registerPlugin(useGSAP)
    const container = useRef();

    console.log('test', container.current)

    useGSAP (
        () => {
            // gsap code here...
            gsap.to(container.current, { x: 300 }); // <-- automatically reverted
        },
        { scope: container }
    ); // <-- scope is for selector text (optional)
        

    return (
        <div ref={container} className='w-[40vw] min-h-[40vh] border-2'>

        </div>

    )
}

export default ExperiencesCard;