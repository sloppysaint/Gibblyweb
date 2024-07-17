
import {  useFrame } from "@react-three/fiber"

import { Physics, RigidBody,CuboidCollider } from "@react-three/rapier"
import './css/loader.module.css'
import { useEffect, useRef  } from "react"






function Loader() {

   let rotation = useRef()
   
    useFrame(()=>{
       rotation.current.rotation.z +=0.03
       rotation.current.rotation.x +=0.01   
    })

 

    return (
       
           <>
            <directionalLight position={[5, 5, -10]} intensity={2} />
            <ambientLight intensity={0.75} />

            <Physics >
                <RigidBody type="dynamic" >
                    <mesh ref={rotation} position={[0, 2, 0]}>
                        <meshBasicMaterial color={"#FF7B02"} />
                        <boxGeometry args={[1, 1, 1]} />
                    </mesh>
                  
                </RigidBody>


                <RigidBody type="fixed" colliders={false} position={[0, -2, 0]} >
                  
                    <mesh/>
                    <CuboidCollider  args={[10, 1, 5]} />


                </RigidBody>
            </Physics>
            </>
       
    )
}


export { Loader }