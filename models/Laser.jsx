import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';
import { FLOOR_HEIGHT, NB_FLOORS } from './Tokyo';
import * as THREE from 'three';

function Laser(props) {
    // var skyGeo = new THREE.SphereGeometry(100000, 25, 25); 
    // var loader  = new THREE.TextureLoader(),
    //     texture = loader.load( "images/space.jpg" );
    // var material = new THREE.MeshPhongMaterial({ 
    //     map: texture,
    // });
    // var sky = new THREE.Mesh(skyGeo, material);
    // sky.material.side = THREE.BackSide;
    // scene.add(sky);


    const laserRef = useRef()
    const tl = useRef();

    useEffect(() => {
        laserRef.current.lookAt(new THREE.Vector3(props.mousePosition.x, props.mousePosition.y, -200))
        console.log('count is ok')
        console.log('test', props.count)

        const newPosition = new THREE.Vector3(0, 10, 5);
        laserRef.current.position.copy(newPosition);

        tl.current = gsap.timeline();
        console.log(props.mousePosition)
        // VERTICAL ANIMATION
        tl.current.to(
        laserRef.current.position,
        {
            duration: 50,
            x:  props.mousePosition.x,
            y:  props.mousePosition.y,
            z: -100,
            
        },
        // gsap.to(
        //     laserRef.current.position,
        //     {
        //         duration: 0, // Durée de l'animation
        //         x: 0,
        //         y: 10,
        //         z: 5,
        //         onComplete: () => {
        //             // Déclencher à nouveau le mouvement si nécessaire
        //             if (props.count !== undefined) {
        //                 // Réappliquer le tween pour redémarrer le mouvement
        //                 tl.current.restart();
        //             }
        //         }
        //     }
        // ),
        );
    }, [props.count])


        

    return (
        <mesh ref = {laserRef} position={[0, 5, -10]}>
            <boxGeometry attach="geometry" args={[0.1, 0.1, 4]} />
            <meshBasicMaterial
                attach='material'
                color='red'
                roughness={0.1}
                metalness={1}
            />

        </mesh>
    )
}

export default Laser;