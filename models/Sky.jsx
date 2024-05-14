import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';
import React from 'react'


function Sky() {
    // var skyGeo = new THREE.SphereGeometry(100000, 25, 25); 
    // var loader  = new THREE.TextureLoader(),
    //     texture = loader.load( "images/space.jpg" );
    // var material = new THREE.MeshPhongMaterial({ 
    //     map: texture,
    // });
    // var sky = new THREE.Mesh(skyGeo, material);
    // sky.material.side = THREE.BackSide;
    // scene.add(sky);
    const {scene} = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([

    ])

    return (
        <mesh>
            <boxGeometry attach="geometry" args={[32, 32, 32]} />
            <meshBasicMaterial
                attach='material'
                color='white'
                roughness={0.1}
                metalness={1}
            />

        </mesh>
    )
}

export default Sky;
