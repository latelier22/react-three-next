/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
    const { nodes, materials } = useGLTF("/MugModel.gltf");
    return (
        <group {...props} position={[0, -5, 0]} scale={[100, 100, 100]} dispose={null}>
            <group rotation={[0, -0.412, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003.geometry}
                    material={materials.Material_1}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cylinder003_1.geometry}
                    material={materials["color-material"]}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Exterior.geometry}
                material={materials["white-material"]}
                rotation={[0, -0.412, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Impression.geometry}
                material={materials["map-material"]}
                rotation={[0, -0.412, 0]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Interior.geometry}
                material={materials["color-material"]}
                rotation={[0, -0.412, 0]}
            />
        </group>
    );
}

export default Model;

useGLTF.preload("/MugModel.gltf");


// import React, { useRef } from 'react'
// import { useFrame, useThree } from '@react-three/fiber'
// import { useGLTF } from '@react-three/drei'
// import * as THREE from 'three'

// // MODELISATION DU MUB IMPORT BLENDER

// function MugModel(props) {
//     const group = useRef()
//     const { nodes, materials } = useGLTF('/MugModel.gltf')
//     const { gl } = useThree()

//     /* CANVAS POUR DESSINER TEXTURE*/

//     let canvas = Array.from(document.getElementsByTagName('canvas'))[1],
//         ctx,
//         texture
//     ctx = canvas.getContext('2d')

//     // CREATION TEXTURE //

//     texture = new THREE.CanvasTexture(ctx.canvas)
//     texture.flipY = false // Vous pouvez essayer true si nécessaire.
//     texture.anisotropy = gl.capabilities.getMaxAnisotropy()
//     texture.needsUpdate = true

//     /* ANIMATION */

//     useFrame((state, delta) => {
//         if (props.animation) {
//             group.current.rotation.y += props.animationSpeed * 0.001 // Vitesse de rotation
//         }
//         texture.needsUpdate = true
//     })

//     return (
//         // DESCRIPTION DU MODELE

//         <group scale={8} rotation={[0, 1.812, 0]} position={[0, 0, 0]} ref={group} {...props} dispose={null}>
//       //ANSE //
//             <group rotation={[0, -0.412, 0]}>
//                 <mesh
//                     castShadow
//                     receiveShadow
//                     geometry={nodes.Exterior.geometry}
//                     material={materials['white-material']}
//                     rotation={[0, -0.412, 0]}
//                 />
//                 <mesh castShadow receiveShadow geometry={nodes.Cylinder003_1.geometry} material={materials['color-material']} />
//             </group>
//       // EXTERIEUR
//             <mesh castShadow receiveShadow geometry={nodes.Exterior.geometry} material={materials['white-material']} rotation={[0, -0.412, 0]} />
//       // ZONE D'IMPRESSION DU MODEL
//             <mesh
//                 rotation={[0, -0.412, 0]}
//                 castShadow
//                 receiveShadow
//                 geometry={nodes.Impression.geometry}
//                 material={materials['map-material']}
//                 flipY={true}
//             >
//                 <meshStandardMaterial attach="material" map={texture}>
//                     <canvasTexture attach="map" image={canvas} />
//                 </meshStandardMaterial>
//             </mesh>
//       // INTERIEUR
//             <mesh castShadow receiveShadow geometry={nodes.Interior.geometry} material={materials['color-material']} rotation={[0, -0.412, 0]} />
//         </group>
//     )
// }

// useGLTF.preload('/MugModel.gltf')

// export default MugModel
